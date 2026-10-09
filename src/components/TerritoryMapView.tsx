import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Baby, Crosshair, Map, MapPin, Route, School, ShieldCheck, Users } from 'lucide-react';
import { MUNICIPAL_BOUNDARY, SCHOOL_LOCATIONS, TerritoryRegion } from '../data/schoolLocations';
import { EARLY_CHILDHOOD_LOCATIONS, EarlyChildhoodLocation, SCHOOL_PRE_OFFER } from '../data/earlyChildhoodLocations';

type FluencySchool = {
  name: string;
  previstos: number;
  avaliados: number;
  participacao: number;
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  iniciante: number;
  fluente: number;
  leitores: number;
  ifl: string;
};

const normalizeText = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();

const REGION_COLORS: Record<TerritoryRegion, string> = {
  Centro: '#2563eb', Norte: '#0891b2', Sul: '#16a34a', Leste: '#7c3aed', Oeste: '#d97706', Araretama: '#dc2626'
};

const REGIONS = Object.keys(REGION_COLORS) as TerritoryRegion[];

type LocatedSchool = (typeof SCHOOL_LOCATIONS)[number] & { performance?: FluencySchool };

type NearbyCenter = EarlyChildhoodLocation & { distanceKm: number };

function hasPreOffer(cie: string) {
  const offer = SCHOOL_PRE_OFFER[cie];
  return Boolean(offer && (offer.pre1Enrollment > 0 || offer.pre2Enrollment > 0));
}

function earlyCenterColor(center: EarlyChildhoodLocation) {
  if (center.pre1Enrollment > 0 && center.pre2Enrollment > 0) return '#7c3aed';
  if (center.pre1Enrollment > 0 || center.pre2Enrollment > 0) return '#ec4899';
  return '#06b6d4';
}

function distanceKm(a: {lat:number; lon:number}, b: {lat:number; lon:number}) {
  const radius = 6371;
  const toRad = (value: number) => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function CartographicMap({ locations, selectedName, onSelect, fullMunicipality, showEarlyCenters, nearbyCenters }: {
  locations: LocatedSchool[];
  selectedName: string;
  onSelect: (name: string) => void;
  fullMunicipality: boolean;
  showEarlyCenters: boolean;
  nearbyCenters: NearbyCenter[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const dataLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      zoomControl: true,
      minZoom: 9,
      maxZoom: 19,
      zoomSnap: 0.5,
      zoomDelta: 0.5,
      scrollWheelZoom: true,
      doubleClickZoom: true
    }).setView([-22.94, -45.45], 13);
    mapRef.current = map;

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Imagem: Esri, Maxar, Earthstar Geographics e comunidade GIS'
    }).addTo(map);
    const labels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Referências cartográficas: Esri'
    }).addTo(map);
    const streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    });
    L.control.layers({ 'Satélite': satellite, 'Ruas': streets }, { 'Nomes e limites': labels }, { position: 'topright' }).addTo(map);
    dataLayerRef.current = L.layerGroup().addTo(map);
    return () => { map.remove(); mapRef.current = null; };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const layer = dataLayerRef.current;
    if (!map || !layer) return;
    layer.clearLayers();
    const routeTimers: ReturnType<typeof setTimeout>[] = [];
    const boundary = MUNICIPAL_BOUNDARY.map(([lon, lat]) => [lat, lon] as L.LatLngTuple);
    L.polygon(boundary, { color: '#1d4ed8', weight: 4, fillColor: '#2563eb', fillOpacity: 0.08, dashArray: '10 7' })
      .bindTooltip('Limite municipal oficial de Pindamonhangaba', { sticky: true })
      .addTo(layer);
    locations.forEach(item => {
      const active = item.name === selectedName;
      if (hasPreOffer(item.cie)) {
        L.circleMarker([item.lat, item.lon], { radius: active ? 17 : 14, color: '#facc15', weight: 3, fillOpacity: 0, opacity: 0.95, dashArray: '4 3', interactive: false }).addTo(layer);
      }
      const marker = L.circleMarker([item.lat, item.lon], {
        radius: active ? 12 : 9,
        color: active ? '#0f172a' : '#ffffff',
        weight: active ? 4 : 3,
        fillColor: performanceColor(item.performance),
        fillOpacity: 0.96
      }).addTo(layer);
      const pre = SCHOOL_PRE_OFFER[item.cie];
      const preText = hasPreOffer(item.cie) ? `<br><b>Oferta de Pré:</b> ${pre.pre1Enrollment} Pré I · ${pre.pre2Enrollment} Pré II` : '';
      marker.bindTooltip(`<strong>${item.name}</strong><br>${item.region} · Setor ${item.sector}<br>${item.performance ? `IFL: ${item.performance.ifl} · Leitores: ${item.performance.leitores.toFixed(1)}%` : 'Sem indicador vinculado'}${preText}`, { direction: 'top', offset: [0, -8] });
      marker.on('click', () => onSelect(item.name));
    });

    if (showEarlyCenters) {
      EARLY_CHILDHOOD_LOCATIONS.forEach(center => {
        const nearby = nearbyCenters.some(item => item.cie === center.cie);
        const color = earlyCenterColor(center);
        const size = nearby ? 18 : 14;
        const icon = L.divIcon({
          className: '',
          html: `<span style="display:block;width:${size}px;height:${size}px;background:${color};border:${nearby ? 4 : 3}px solid ${nearby ? '#0f172a' : '#fff'};border-radius:3px;transform:rotate(45deg);box-shadow:0 2px 7px rgba(15,23,42,.4)"></span>`,
          iconSize: [size, size], iconAnchor: [size / 2, size / 2]
        });
        const marker = L.marker([center.lat, center.lon], { icon, zIndexOffset: nearby ? 1000 : 300 }).addTo(layer);
        marker.bindTooltip(`<strong>${center.name}</strong><br>CMEI · Setor ${center.sector}<br>Pré I: ${center.pre1Enrollment} matrículas · Pré II: ${center.pre2Enrollment} matrículas`, { direction: 'top', offset: [0, -10] });
      });
      const selected = locations.find(item => item.name === selectedName);
      if (selected) nearbyCenters.forEach((center, index) => {
        const route = L.polyline([[center.lat, center.lon], [selected.lat, selected.lon]], {
          color: index === 0 ? '#f97316' : '#2563eb',
          weight: index === 0 ? 4 : 3,
          opacity: 0.9,
          lineCap: 'round',
          lineJoin: 'round',
          className: 'nearby-route nearby-route--animated'
        })
          .bindTooltip(`${index + 1}º CMEI mais próximo · ${center.distanceKm.toFixed(1).replace('.', ',')} km em linha reta`, { sticky: true })
          .addTo(layer);

        routeTimers.push(setTimeout(() => {
          route.getElement()?.classList.remove('nearby-route--animated');
        }, 5000));
      });
    }
    return () => routeTimers.forEach(clearTimeout);
  }, [locations, selectedName, onSelect, showEarlyCenters, nearbyCenters]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (fullMunicipality) {
      const boundary = MUNICIPAL_BOUNDARY.map(([lon, lat]) => [lat, lon] as L.LatLngTuple);
      map.flyToBounds(L.latLngBounds(boundary), { padding: [24, 24], duration: 1.1 });
    } else if (locations.length === 1) {
      map.flyTo([locations[0].lat, locations[0].lon], 17, { duration: 1.1 });
    } else if (locations.length) {
      map.flyToBounds(
        L.latLngBounds(locations.map(item => [item.lat, item.lon] as L.LatLngTuple)),
        { padding: [70, 70], maxZoom: 16, duration: 1.1 }
      );
    }
  }, [locations, fullMunicipality]);

  return <>
    <style>{`
      .nearby-route { stroke-dasharray: 6 7; filter: drop-shadow(0 1px 2px rgba(255,255,255,.95)); }
      .nearby-route--animated { animation: nearby-route-flow .65s linear infinite; }
      @keyframes nearby-route-flow { to { stroke-dashoffset:-23; } }
      @media (prefers-reduced-motion: reduce) {
        .nearby-route--animated { animation:none; }
      }
    `}</style>
    <div ref={containerRef} className="h-[620px] w-full" aria-label="Mapa cartográfico das escolas municipais de Pindamonhangaba" />
  </>;
}

function performanceColor(school?: FluencySchool) {
  if (!school) return '#64748b';
  const ifl = Number(school.ifl);
  if (school.participacao < 80 || ifl < 4) return '#dc2626';
  if (ifl < 6) return '#f59e0b';
  return '#16a34a';
}

function findSchool(name: string, schools: FluencySchool[]) {
  const stopWords = new Set(['ESCOLA','MUNICIPAL','MUN','EM','PROFESSORA','PROFESSOR','PROFA','PROF','DR','DOUTOR','DE','DA','DO','DOS','DAS']);
  const tokens = (value: string) => new Set(normalizeText(value).split(/\s+/).filter(token => token.length > 2 && !stopWords.has(token)));
  const target = tokens(name);
  let best: FluencySchool | undefined;
  let bestScore = 0;
  schools.forEach(school => {
    const candidate = tokens(school.name);
    const intersection = [...target].filter(token => candidate.has(token)).length;
    const score = intersection / Math.max(1, Math.min(target.size, candidate.size));
    if (score > bestScore) { best = school; bestScore = score; }
  });
  return bestScore >= 0.5 ? best : undefined;
}

export default function TerritoryMapView({ schools }: { schools: FluencySchool[] }) {
  const [region, setRegion] = useState<TerritoryRegion | 'Todas'>('Todas');
  const [sector, setSector] = useState<number | 'Todos'>('Todos');
  const [urbanZoom, setUrbanZoom] = useState(true);
  const [showEarlyCenters, setShowEarlyCenters] = useState(true);
  const [selectedName, setSelectedName] = useState(SCHOOL_LOCATIONS[0].name);

  const locations = useMemo(() => SCHOOL_LOCATIONS.map(location => ({
    ...location,
    performance: findSchool(location.name, schools)
  })), [schools]);

  const filtered = useMemo(
    () => locations.filter(item => (region === 'Todas' || item.region === region) && (sector === 'Todos' || item.sector === sector)),
    [locations, region, sector]
  );
  const selected = filtered.find(item => item.name === selectedName) || filtered[0] || locations[0];
  const nearbyCenters = useMemo<NearbyCenter[]>(() => selected
    ? EARLY_CHILDHOOD_LOCATIONS.map(center => ({...center, distanceKm: distanceKm(selected, center)})).sort((a,b) => a.distanceKm - b.distanceKm).slice(0,3)
    : [], [selected]);
  const selectedPre = SCHOOL_PRE_OFFER[selected.cie] || {pre1Enrollment:0,pre2Enrollment:0};
  const focusRegion = (value: TerritoryRegion | 'Todas') => {
    setRegion(value);
    setUrbanZoom(true);
  };
  const focusSector = (value: number | 'Todos') => {
    setSector(value);
    setUrbanZoom(true);
  };

  const totals = filtered.reduce((acc, item) => {
    if (item.performance) {
      acc.avaliados += item.performance.avaliados;
      acc.previstos += item.performance.previstos;
      acc.ifl += Number(item.performance.ifl) * item.performance.avaliados;
      acc.leitores += item.performance.leitores * item.performance.avaliados;
    }
    return acc;
  }, { avaliados: 0, previstos: 0, ifl: 0, leitores: 0 });

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-7 text-white shadow-lg">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300"><Map size={16}/> Inteligência territorial</div>
            <h1 className="text-3xl font-black tracking-tight">Mapa Educacional de Pindamonhangaba</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">Distribuição das unidades do 2º ano no território municipal, combinando endereço, setor administrativo da SME e indicadores de aprendizagem.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><b className="block text-2xl">{filtered.length}</b><span className="text-[10px] uppercase text-slate-400">Escolas</span></div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><b className="block text-2xl">{EARLY_CHILDHOOD_LOCATIONS.length}</b><span className="text-[10px] uppercase text-slate-400">CMEIs</span></div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><b className="block text-2xl">{totals.avaliados.toLocaleString('pt-BR')}</b><span className="text-[10px] uppercase text-slate-400">Avaliados</span></div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><b className="block text-2xl">{totals.avaliados ? (totals.ifl / totals.avaliados).toFixed(1) : '0.0'}</b><span className="text-[10px] uppercase text-slate-400">IFL médio</span></div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="space-y-3 border-b border-slate-100 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[13px] font-black uppercase tracking-wider text-slate-500">Região</span>
            {(['Todas', ...REGIONS] as const).map(value => <button key={value} onClick={() => focusRegion(value)} className={`rounded-full border px-3.5 py-1.5 text-[13px] font-bold transition ${region === value ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300'}`}>{value}</button>)}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[13px] font-black uppercase tracking-wider text-slate-500">Setor SME</span>
              {(['Todos', 1, 4, 5, 7, 9, 10] as const).map(value => <button key={value} onClick={() => focusSector(value)} className={`rounded-full border px-3.5 py-1.5 text-[13px] font-bold transition ${sector === value ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'}`}>{value === 'Todos' ? value : `Setor ${value}`}</button>)}
            </div>
            <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
              <button onClick={() => setShowEarlyCenters(value => !value)} className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-bold transition ${showEarlyCenters ? 'bg-violet-100 text-violet-800 ring-1 ring-violet-300' : 'bg-slate-100 text-slate-600'}`}><Baby size={15}/>{showEarlyCenters ? 'Ocultar CMEIs' : 'Exibir CMEIs'}</button>
              <button onClick={() => setUrbanZoom(value => !value)} className="flex items-center gap-2 rounded-lg bg-slate-100 px-3.5 py-2 text-[13px] font-bold text-slate-700 transition hover:bg-slate-200"><Crosshair size={15}/>{urbanZoom ? 'Ver município inteiro' : 'Ampliar área urbana'}</button>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="self-start space-y-3">
            <div className="h-[620px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <CartographicMap locations={filtered} selectedName={selected?.name || ''} onSelect={setSelectedName} fullMunicipality={!urbanZoom} showEarlyCenters={showEarlyCenters} nearbyCenters={nearbyCenters} />
            </div>
            <div className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-[11px] shadow-sm">
              <div className="mb-2 font-black uppercase text-slate-700">Desempenho das unidades escolares</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-green-600"/>Adequado</span>
                <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-amber-500"/>Atenção</span>
                <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-full bg-red-600"/>Prioridade</span>
              </div>
              <div className="mt-2 border-t border-slate-200 pt-2">
                <div className="mb-1.5 font-black uppercase text-slate-700">Educação Infantil</div>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-cyan-500"/>CMEI sem Pré</span>
                  <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-pink-500"/>CMEI com uma fase</span>
                  <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-violet-600"/>CMEI com Pré I e II</span>
                  <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-full border-2 border-dashed border-yellow-400"/>Escola com Pré</span>
                </div>
              </div>
              <details className="group mt-2 border-t border-slate-200 pt-2 text-slate-600">
                <summary className="cursor-pointer select-none font-bold text-blue-700 hover:text-blue-900">Entenda os critérios</summary>
                <div className="mt-2 space-y-2 leading-4">
                  <p>As cores representam o desempenho das <b>unidades escolares</b>, todas localizadas em Pindamonhangaba.</p>
                  <ul className="space-y-1.5">
                    <li><b className="text-green-700">Verde — Adequado:</b> participação ≥ 80% e IFL ≥ 6,0.</li>
                    <li><b className="text-amber-700">Laranja — Atenção:</b> participação ≥ 80% e IFL entre 4,0 e 5,9.</li>
                    <li><b className="text-red-700">Vermelho — Prioridade:</b> participação &lt; 80% ou IFL &lt; 4,0.</li>
                    <li><b className="text-slate-900">Contorno preto:</b> escola atualmente selecionada.</li>
                    <li><b className="text-blue-700">Linha azul tracejada:</b> limite oficial do município.</li>
                    <li><b>Linha branca:</b> referência da camada cartográfica, sem classificação educacional.</li>
                    <li><b>Losangos:</b> CMEIs; o contorno preto destaca os três mais próximos da escola selecionada.</li>
                    <li><b>Linhas pontilhadas:</b> partem dos três CMEIs mais próximos em direção à escola selecionada, representando o possível fluxo futuro para o Ensino Fundamental; movimentam-se por 5 segundos e depois permanecem estáveis.</li>
                    <li><b>Halo amarelo:</b> escola das 37 unidades que também possui matrículas de Pré I e/ou Pré II.</li>
                  </ul>
                  <p><b>IFL</b> é o Índice de Fluência Leitora, calculado na escala de 0 a 10 a partir da distribuição dos estudantes entre N1, N2, N3, N4, Leitor Iniciante e Leitor Fluente.</p>
                  <p className="rounded-md bg-amber-50 p-2 text-amber-900">Participação abaixo de 80% gera prioridade, mesmo quando o IFL dos avaliados é favorável, pois reduz a representatividade do resultado.</p>
                </div>
              </details>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-start gap-3"><div className="rounded-xl bg-blue-100 p-2.5 text-blue-700"><School size={20}/></div><div><div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Unidade selecionada</div><h2 className="mt-1 text-sm font-black leading-5 text-slate-900">{selected.name}</h2></div></div>
              <dl className="space-y-3 text-xs">
                <div><dt className="font-bold text-slate-400">Endereço</dt><dd className="mt-1 leading-5 text-slate-700">{selected.address}</dd></div>
                <div className="grid grid-cols-3 gap-2"><div><dt className="font-bold text-slate-400">CIE</dt><dd className="mt-1 font-black">{selected.cie}</dd></div><div><dt className="font-bold text-slate-400">Setor</dt><dd className="mt-1 font-black">{selected.sector}</dd></div><div><dt className="font-bold text-slate-400">Região</dt><dd className="mt-1 font-black" style={{color:REGION_COLORS[selected.region]}}>{selected.region}</dd></div></div>
              </dl>
              {hasPreOffer(selected.cie) && <div className="mt-4 rounded-lg border border-yellow-300 bg-yellow-50 p-3 text-xs text-yellow-950"><div className="font-black uppercase tracking-wide">Oferta de Pré na própria escola</div><div className="mt-1">Pré I: <b>{selectedPre.pre1Enrollment}</b> matrículas · Pré II: <b>{selectedPre.pre2Enrollment}</b> matrículas</div></div>}
              {selected.performance && <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 text-center"><div><b className="block text-xl text-slate-900">{selected.performance.participacao.toFixed(1)}%</b><span className="text-[9px] uppercase text-slate-400">Participação</span></div><div><b className="block text-xl text-blue-700">{Number(selected.performance.ifl).toFixed(2)}</b><span className="text-[9px] uppercase text-slate-400">IFL</span></div><div><b className="block text-xl text-green-700">{selected.performance.leitores.toFixed(1)}%</b><span className="text-[9px] uppercase text-slate-400">Leitores</span></div></div>}
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-white p-3 text-[10px] leading-4 text-slate-500"><MapPin size={15} className="shrink-0 text-blue-600"/>{selected.precision === 'endereco' ? 'Ponto localizado pelo endereço.' : 'Posição aproximada pelo CEP; recomenda-se validação cartográfica.'}</div>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-black text-violet-950"><Route size={17}/>CMEIs mais próximos</h3>
              <p className="mb-3 text-[10px] leading-4 text-violet-800">Distância geográfica em linha reta a partir da escola selecionada. Não representa rota viária nem encaminhamento automático.</p>
              <ol className="space-y-2">{nearbyCenters.map((center,index) => <li key={center.cie} className="rounded-lg border border-violet-100 bg-white p-3 text-xs shadow-sm"><div className="flex gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-black text-white">{index+1}</span><div><div className="font-black leading-4 text-slate-900">{center.name}</div><div className="mt-1 text-slate-500">{center.distanceKm.toFixed(1).replace('.', ',')} km · Setor {center.sector}</div><div className="mt-1 text-[10px] text-violet-700">Pré I: {center.pre1Enrollment} · Pré II: {center.pre2Enrollment}</div></div></div></li>)}</ol>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-black"><ShieldCheck size={17} className="text-blue-600"/>Leitura territorial</h3>
              <div className="space-y-2">{REGIONS.map(item => { const count = locations.filter(location => location.region === item).length; return <button key={item} onClick={() => focusRegion(item)} className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-xs hover:bg-slate-50"><span className="flex items-center gap-2 font-bold"><i className="h-2.5 w-2.5 rounded-full" style={{background:REGION_COLORS[item]}}/>{item}</span><span className="font-mono text-slate-500">{count} escolas</span></button>; })}</div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4"><MapPin className="mb-2 text-blue-700" size={20}/><h3 className="text-sm font-black text-blue-950">Limite municipal</h3><p className="mt-1 text-xs leading-5 text-blue-800">Geometria oficial do IBGE, código municipal 3538006, destacada em azul.</p></div>
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4"><Users className="mb-2 text-violet-700" size={20}/><h3 className="text-sm font-black text-violet-950">Regiões de análise</h3><p className="mt-1 text-xs leading-5 text-violet-800">Classificação territorial indicativa construída a partir dos bairros informados na planilha da SME.</p></div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4"><School className="mb-2 text-amber-700" size={20}/><h3 className="text-sm font-black text-amber-950">Fonte dos endereços</h3><p className="mt-1 text-xs leading-5 text-amber-800">Planilha “Setores Escolares SME 2026”, com vínculo por CIE, unidade e setor.</p></div>
        <div className="rounded-xl border border-pink-200 bg-pink-50 p-4"><Baby className="mb-2 text-pink-700" size={20}/><h3 className="text-sm font-black text-pink-950">Oferta de Educação Infantil</h3><p className="mt-1 text-xs leading-5 text-pink-800">Matrículas de Pré I e Pré II extraídas do relatório “Vagas Totais x Matrículas”, período de 2025. Proximidade calculada em linha reta.</p></div>
      </section>
    </div>
  );
}
