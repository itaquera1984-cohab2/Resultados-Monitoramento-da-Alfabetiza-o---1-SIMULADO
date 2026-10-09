export type TerritoryRegion = 'Centro' | 'Norte' | 'Sul' | 'Leste' | 'Oeste' | 'Araretama';

export interface SchoolLocation {
  name: string;
  cie: string;
  sector: number;
  region: TerritoryRegion;
  address: string;
  lat: number;
  lon: number;
  precision: 'endereco' | 'cep';
}

export const MUNICIPAL_BOUNDARY: [number, number][] = [[-45.3072,-23.0252],[-45.3169,-23.0229],[-45.3292,-23.0131],[-45.3272,-23.0097],[-45.3316,-22.997],[-45.328,-22.9843],[-45.3216,-22.976],[-45.3274,-22.9641],[-45.3373,-22.9515],[-45.3386,-22.9386],[-45.3326,-22.9102],[-45.3407,-22.9015],[-45.3501,-22.8829],[-45.3511,-22.8691],[-45.338,-22.8596],[-45.3317,-22.862],[-45.3239,-22.8556],[-45.3331,-22.8456],[-45.3421,-22.8512],[-45.3418,-22.8399],[-45.3332,-22.8384],[-45.3392,-22.8185],[-45.3491,-22.8151],[-45.3499,-22.8103],[-45.3643,-22.8006],[-45.3562,-22.7932],[-45.346,-22.7886],[-45.3503,-22.7851],[-45.3712,-22.7838],[-45.3793,-22.7857],[-45.3978,-22.7825],[-45.4025,-22.7766],[-45.4056,-22.7653],[-45.3969,-22.7494],[-45.4039,-22.7401],[-45.4139,-22.733],[-45.4216,-22.731],[-45.4292,-22.72],[-45.4265,-22.7131],[-45.4375,-22.7112],[-45.4391,-22.7034],[-45.4453,-22.705],[-45.4481,-22.7119],[-45.4567,-22.7191],[-45.4643,-22.7141],[-45.4759,-22.7201],[-45.4816,-22.7276],[-45.4936,-22.7367],[-45.4945,-22.7421],[-45.5049,-22.7446],[-45.52,-22.7539],[-45.528,-22.7558],[-45.5416,-22.7691],[-45.5612,-22.7735],[-45.5654,-22.7781],[-45.5791,-22.7769],[-45.5812,-22.7894],[-45.5869,-22.7927],[-45.598,-22.7894],[-45.6125,-22.7939],[-45.6144,-22.7971],[-45.6143,-22.8049],[-45.6316,-22.821],[-45.6292,-22.8337],[-45.6334,-22.8431],[-45.6427,-22.8474],[-45.6515,-22.8655],[-45.67,-22.8765],[-45.6664,-22.8817],[-45.657,-22.8832],[-45.6399,-22.8801],[-45.6307,-22.875],[-45.6111,-22.8789],[-45.5955,-22.8758],[-45.5916,-22.8825],[-45.5684,-22.8907],[-45.5533,-22.8994],[-45.5526,-22.9103],[-45.5459,-22.9228],[-45.5382,-22.9212],[-45.5218,-22.9246],[-45.5242,-22.9304],[-45.5142,-22.9431],[-45.5086,-22.9564],[-45.5036,-22.979],[-45.501,-22.9941],[-45.4963,-23.0013],[-45.4944,-23.0148],[-45.4877,-23.0162],[-45.4663,-23.0382],[-45.4665,-23.0458],[-45.4597,-23.0547],[-45.4461,-23.0601],[-45.439,-23.0715],[-45.4227,-23.0604],[-45.4088,-23.0484],[-45.4068,-23.0404],[-45.393,-23.0361],[-45.3865,-23.026],[-45.3809,-23.0262],[-45.3788,-23.0172],[-45.3544,-23.0068],[-45.3471,-23.0198],[-45.3394,-23.0246],[-45.3404,-23.0305],[-45.3283,-23.0343],[-45.3242,-23.0291],[-45.3072,-23.0252]];

export const SCHOOL_LOCATIONS: SchoolLocation[] = [
  ['EM PROFA MARIA MADUREIRA SALGADO DONA MINICA','567012',4,'Sul','Estrada Carlos Giacomo Ângelo Massetti, 500 - Cruz Pequena',-22.8872615,-45.4850616,'endereco'],
  ['ESCOLA MUN PADRE MARIO ANTONIO BONOTTI REDENTORISTA','73222',4,'Oeste','Rua Araras, 312 - Maria Áurea',-22.9421978,-45.4676014,'endereco'],
  ['ESCOLA MUNICIPAL ABDIAS JUNIOR SANTIAGO E SILVA','73179',10,'Leste','Rua João Maria Pires, 30 - Santa Cecília',-22.9304622,-45.4339706,'endereco'],
  ['ESCOLA MUNICIPAL ARTHUR DE ANDRADE','73143',7,'Norte','Av. Princesa do Norte, 1321 - Cidade Nova',-22.9444180,-45.4132210,'endereco'],
  ['ESCOLA MUNICIPAL DOUTOR ANGELO PAZ DA SILVA','62431',5,'Araretama','Rua José Luiz Imediato, 235 - Cidade Jardim',-22.9560028,-45.4920798,'endereco'],
  ['ESCOLA MUNICIPAL DR ANDRE FRANCO MONTORO','249695',1,'Centro','Av. Monsenhor João José de Azevedo, 520 - Crispim',-22.918107,-45.4514571,'endereco'],
  ['ESCOLA MUNICIPAL DR FRANCISCO DE ASSIS CESAR','73131',9,'Norte','Rua Francisco Sebastião Borges, 259 - Moreira César',-22.9139678,-45.3632798,'endereco'],
  ['ESCOLA MUNICIPAL DULCE PEDROSA ROMEIRO GUIMARAES','278725',1,'Centro','Av. Dr. João Ribeiro, 131 - Boa Vista',-22.9242230,-45.4708720,'endereco'],
  ['ESCOLA MUNICIPAL JOAO CESARIO','73234',7,'Norte','Av. João Francisco da Silva, 1956 - Feital',-22.9403324,-45.3970622,'endereco'],
  ['ESCOLA MUNICIPAL JOAO KOLENDA LEMOS','5825',5,'Araretama','Estrada Municipal Carlos Lopes Guedes, 2265 - Bem Viver',-22.9394012,-45.5076189,'cep'],
  ['ESCOLA MUNICIPAL JOSE GONCALVES DA SILVA SEU JUQUINHA','471598',9,'Norte','Rua Benedito Machado Gomes, 137 - Liberdade',-22.9040230,-45.3751440,'endereco'],
  ['ESCOLA MUNICIPAL PADRE ZEZINHO','73124',10,'Norte','Rua Guilherme Nicolletti, 753 - Vila São Benedito',-22.8892392,-45.3866644,'endereco'],
  ['ESCOLA MUNICIPAL PROF LAURO VICENTE DE AZEVEDO','274161',9,'Norte','Rua Antônio Carlos Corrêa de Macedo, 36 - Cícero Prado',-22.9006689,-45.3760479,'endereco'],
  ['ESCOLA MUNICIPAL PROFA MADALENA CALTABIANO SALUM BENJAMIM','410330',5,'Araretama','Rua José Pereira Sobrinho, 160 - Nova Esperança',-22.9482489,-45.4956769,'endereco'],
  ['ESCOLA MUNICIPAL PROFA MARIA APARECIDA ARANTES VASQUES','64191',1,'Oeste','Av. Capitão Monteiro do Amaral, 300 - Mombaça',-22.9300190,-45.4776811,'endereco'],
  ['ESCOLA MUNICIPAL PROFA MARIA APARECIDA CAMARGO DE SOUZA','438259',4,'Sul','Estrada Municipal Luiza Fernandes Miranda, 170 - Ribeirão Grande',-22.7985026,-45.4507591,'endereco'],
  ['ESCOLA MUNICIPAL PROFA MARIA HELENA RIBEIRO VILELA','206885',7,'Norte','Rua Tung A Chin, 100 - Jardim Regina',-22.9413904,-45.3737801,'cep'],
  ['ESCOLA MUNICIPAL PROFA MARIA ZARA MINE RENOLDI DOS SANTOS','73209',1,'Oeste','Rua Ver. José Francisco Alves dos Santos, 129 - Jardim Cristina',-22.9442473,-45.4570341,'endereco'],
  ['ESCOLA MUNICIPAL PROFA ODETE CORREA MADUREIRA','567024',10,'Leste','Rua José Benedito Alves dos Santos, 31 - Jardim Morumbi',-22.915948,-45.4282721,'endereco'],
  ['ESCOLA MUNICIPAL PROFA RACHEL DE AGUIAR LOBERTO','73155',9,'Norte','Rua dos Cravos, 314 - Vale das Acácias',-22.9085549,-45.3713729,'endereco'],
  ['ESCOLA MUNICIPAL PROFA REGINA CELIA MADUREIRA DE SOUZA LIMA','471616',5,'Araretama','Av. Prefeito Nicanor Ramos Nogueira, 830 - Araretama',-22.9503770,-45.5021428,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSOR ALEXANDRE MACHADO SALGADO','206878',7,'Centro','Rua José Benedito Quirino, 280 - Campinas',-22.9621360,-45.4136080,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSOR AUGUSTO CESAR RIBEIRO','274159',4,'Oeste','Rua Vicente Correa Leite, 185 - Vila Rica',-22.9383060,-45.4784160,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSOR ELIAS BARGIS MATHIAS','225198',5,'Araretama','Rua Benedito Bacca Benega, 60 - Araretama',-22.9450668,-45.5061312,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSOR FELIX ADIB MIGUEL','73167',4,'Oeste','Rua Geraldo Prates da Fonseca, 140 - Vila Rica',-22.9391,-45.4742,'cep'],
  ['ESCOLA MUNICIPAL PROFESSOR JOAQUIM PEREIRA DA SILVA','410676',9,'Norte','Rua Dr. Carlos Martins de Almeida Júnior, s/nº - Mantiqueira',-22.8868,-45.3615,'cep'],
  ['ESCOLA MUNICIPAL PROFESSOR MARIO DE ASSIS CESAR','471604',9,'Norte','Rua Maria Glória Carlota, 424 - Padre Rodolfo',-22.9227084,-45.3661462,'cep'],
  ['ESCOLA MUNICIPAL PROFESSOR MOACYR DE ALMEIDA','64221',1,'Oeste','Rua Eng. José Nicola Mutarelli, 192 - Bela Vista',-22.9552155,-45.4585526,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSOR ORLANDO PIRES','64038',4,'Sul','Rodovia Dr. Caio Gomes Figueiredo, 5161 - Bom Sucesso',-22.8894982,-45.5070876,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSOR PAULO FREIRE','206891',1,'Centro','Rua Guilherme de Almeida, 26 - Vila Prado',-22.9399063,-45.4500612,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSORA GILDA PIORINI MOLICA','73106',1,'Leste','Rua Antônio dos Santos, 189 - São Judas Tadeu',-22.9318509,-45.4497009,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSORA ISABEL DO CARMO NOGUEIRA','4636',10,'Centro','Rua Ceará, 40 - Crispim',-22.9144514,-45.4472423,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSORA JULIETA REALE VIEIRA','110206',10,'Leste','Travessa da Rua Felício Carpana Vitali, 149 - Castolira',-22.9246114,-45.4396291,'cep'],
  ['ESCOLA MUNICIPAL PROFESSORA RUTH AZEVEDO ROMEIRO','206866',7,'Sul','Rua dos Pintassilgos, 370 - Triângulo',-22.9435240,-45.4216256,'endereco'],
  ['ESCOLA MUNICIPAL PROFESSORA YVONE APPARECIDA ARANTES CORREA','191619',7,'Norte','Av. dos Cedros, 305 - Goiabal',-22.9828002,-45.4054773,'endereco'],
  ['ESCOLA MUNICIPAL SERAFIM FERREIRA SR SARA','274185',10,'Norte','Alameda dos Manacás, 2100 - Terra dos Ipês II',-22.8909399,-45.3816021,'endereco'],
  ['ESCOLA MUNICIPAL VITO ARDITO','73192',5,'Araretama','Rua Wilson Muassab, 137 - Araretama',-22.9463149,-45.5016199,'endereco'],
].map(([name,cie,sector,region,address,lat,lon,precision]) => ({name,cie,sector,region,address,lat,lon,precision} as SchoolLocation));
