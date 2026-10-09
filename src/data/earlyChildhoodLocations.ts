export interface EarlyChildhoodLocation {
  name: string;
  cie: string;
  sector: number;
  address: string;
  lat: number;
  lon: number;
  pre1Enrollment: number;
  pre2Enrollment: number;
  geocodeScore: number;
}

export interface SchoolPreOffer {
  pre1Enrollment: number;
  pre2Enrollment: number;
}

export const EARLY_CHILDHOOD_LOCATIONS: EarlyChildhoodLocation[] = [
  ['CMEI ESMERALDA SILVA RAMOS','585865',2,'Av. das Orquídeas, 442 - Liberdade',-22.9086142,-45.3755380,0,0,98.16],
  ['CMEI JOSÉ ILDEFONSO MACHADO','191620',2,'Av. Maria Albissu Bonafé, 111 - Laerte Assumpção',-22.9151620,-45.3661750,36,52,97.54],
  ['CMEI MARIA APARECIDA GOMES - SÁ MARIA','225204',2,'Av. Espanha, 847 - Pasin',-22.8910550,-45.3699430,48,83,98.75],
  ['CMEI MARIA DAS DORES SANTOS MARCONDES - MARIA DOS ANJOS','235015',2,'Rua dos Cravos, 264 - Vale das Acácias',-22.9086820,-45.3714230,87,29,97.31],
  ['CMEI MARIA LUIZA LIMA DE ALMEIDA','585889',2,'Rua Silvinho Lourenço de Faria, 70 - Loteamento Azeredo',-22.9201330,-45.3664960,34,50,88.04],
  ['CMEI MARLI LEMES DE MOURA CAMARGO','191632',2,'Rua Maceió, 79 - Terra dos Ipês I',-22.8909100,-45.3748040,0,0,97.23],
  ['CMEI PROFA VALDIRA MORGADO','8097',2,'Rua Geraldo Derrico Moreira, 115 - Mantiqueira',-22.8843530,-45.3701180,0,0,98.20],
  ['CMEI CAIC','234990',3,'Rua Cássio Pires Salgado, 150 - Araretama',-22.9504049,-45.4971469,71,40,98.39],
  ['CMEI JOÃO FLEURY DE SOUZA AMORIM FILHO','652052',3,'Rua Caraguatatuba, 435 - Alto do Cardoso',-22.9441980,-45.4677810,58,38,97.64],
  ['CMEI MONS. JONAS ABIB','10839',3,'Rua Adílson Augusto Bassanello Pereira, 141 - Residencial Arco-Íris',-22.9541930,-45.5007032,0,0,97.59],
  ['CMEI LESSA','4045',3,'Rua Geraldo Prates da Fonseca, 18 - Lessa',-22.9370915,-45.4715618,0,0,99.09],
  ['CMEI LUCINEIA CRISTIANI MARCELO DO AMARAL CARVALHO','10633',3,'Rua João do Amaral, 68 - Araretama',-22.9475720,-45.5006760,15,0,98.16],
  ['CMEI PROFA NEIDE MARIA PEREIRA DE ANDRADE - D. NEIDE','11066',3,'Estrada Municipal Carlos Lopes Guedes Filho, 2161 - Residencial Bem Viver',-22.9395426,-45.5051188,0,0,81.69],
  ['CMEI PROFA RUTH DÓRIS LEMOS','5620',3,'Estrada Municipal Carlos Lopes Guedes Filho, 2365 - Bem Viver',-22.9396653,-45.5067036,102,117,88.10],
  ['CMEI PROFA ANDRÉA CRISTINA DE SOUZA BISSOLI','11695',6,'Rua General Júlio Salgado, 996 - Tabaú',-22.9264922,-45.4498512,0,0,99.06],
  ['CMEI DR. FRANCISCO LESSA JÚNIOR','652076',6,'Rua Pedro Ângelo Foroni, 32 - Cidade Jardim',-22.9588500,-45.4918370,48,0,97.89],
  ['CMEI JOSEFINA CEMBRANELLI SCHMIDT','652064',6,'Rua Dr. Frederico Machado, 855 - Jardim Roseli',-22.9365186,-45.4590622,62,0,97.97],
  ['CMEI PROFA ROSÁLIA DE FÁTIMA SANTOS QUEIROZ','9928',6,'Rua Ceará, 140 - Crispim',-22.9138019,-45.4476128,0,0,98.29],
  ['CMEI PROFA THEREZINHA MACEDO PEDRO DE ANDRADE','8094',6,'Rua Major José dos Santos Moreira, 645 - Vila Bourguese',-22.9306830,-45.4576680,0,0,98.06],
  ['CMEI DONA YOLANDA IMMEDIATO FRYLING','471628',6,'Rua Monteiro Lobato, 101 - Alto do Cardoso',-22.9352749,-45.4624502,0,0,97.68],
  ['CMEI DURVALINO DOS SANTOS - CEAP CAMPINAS','283307',10,'Rua Geraldo Mário Sacramento, 152 - Campinas',-22.9620680,-45.4107020,84,34,98.64],
  ['CMEI ISABEL PEREIRA DA SILVA - DONA ISABEL','585877',10,'Rua Gonzaga, 110 - Moreira César',-22.9164920,-45.3627740,45,36,100],
  ['CMEI DONA MARIA BENEDITA CABRAL SAN MARTIN','652088',10,'Rua Aristides Pires, 38 - Feital',-22.9403680,-45.3963000,71,0,98.75],
  ['CMEI PROFA OLÍMPIA FRANCO CÉSAR','410688',10,'Travessa da Rua Felício Carpana Vitali, 161 - Castolira',-22.9243930,-45.4393010,0,0,96.90],
  ['CMEI FREI REINALDO NIEBORG','235003',10,'Rua Virgílio Marcondes, 66 - Santa Cecília',-22.9290840,-45.4335380,0,0,97.89],
  ['CMEI PROFA SILVIA APARECIDA QUIRINO DE JESUS','10465',10,'Av. Independência, 1842 - Cidade Nova',-22.9487550,-45.4029180,30,0,98.08],
].map(([name,cie,sector,address,lat,lon,pre1Enrollment,pre2Enrollment,geocodeScore]) => ({
  name, cie, sector, address, lat, lon, pre1Enrollment, pre2Enrollment, geocodeScore
} as EarlyChildhoodLocation));

export const SCHOOL_PRE_OFFER: Record<string, SchoolPreOffer> = {
  '567012': {pre1Enrollment:10,pre2Enrollment:20}, '73222': {pre1Enrollment:0,pre2Enrollment:0},
  '73179': {pre1Enrollment:42,pre2Enrollment:43}, '73143': {pre1Enrollment:52,pre2Enrollment:64},
  '62431': {pre1Enrollment:0,pre2Enrollment:55}, '249695': {pre1Enrollment:0,pre2Enrollment:0},
  '73131': {pre1Enrollment:0,pre2Enrollment:0}, '278725': {pre1Enrollment:27,pre2Enrollment:23},
  '73234': {pre1Enrollment:32,pre2Enrollment:114}, '5825': {pre1Enrollment:0,pre2Enrollment:0},
  '471598': {pre1Enrollment:0,pre2Enrollment:45}, '73124': {pre1Enrollment:38,pre2Enrollment:39},
  '274161': {pre1Enrollment:0,pre2Enrollment:43}, '410330': {pre1Enrollment:19,pre2Enrollment:21},
  '64191': {pre1Enrollment:30,pre2Enrollment:40}, '438259': {pre1Enrollment:0,pre2Enrollment:0},
  '206885': {pre1Enrollment:20,pre2Enrollment:46}, '73209': {pre1Enrollment:15,pre2Enrollment:34},
  '567024': {pre1Enrollment:39,pre2Enrollment:46}, '73155': {pre1Enrollment:0,pre2Enrollment:0},
  '471616': {pre1Enrollment:0,pre2Enrollment:50}, '206878': {pre1Enrollment:0,pre2Enrollment:28},
  '274159': {pre1Enrollment:0,pre2Enrollment:0}, '225198': {pre1Enrollment:0,pre2Enrollment:0},
  '73167': {pre1Enrollment:20,pre2Enrollment:42}, '410676': {pre1Enrollment:0,pre2Enrollment:0},
  '471604': {pre1Enrollment:0,pre2Enrollment:0}, '64221': {pre1Enrollment:17,pre2Enrollment:27},
  '64038': {pre1Enrollment:24,pre2Enrollment:39}, '206891': {pre1Enrollment:14,pre2Enrollment:16},
  '73106': {pre1Enrollment:0,pre2Enrollment:33}, '4636': {pre1Enrollment:0,pre2Enrollment:0},
  '110206': {pre1Enrollment:55,pre2Enrollment:46}, '206866': {pre1Enrollment:25,pre2Enrollment:34},
  '191619': {pre1Enrollment:24,pre2Enrollment:17}, '274185': {pre1Enrollment:0,pre2Enrollment:0},
  '73192': {pre1Enrollment:39,pre2Enrollment:0}
};
