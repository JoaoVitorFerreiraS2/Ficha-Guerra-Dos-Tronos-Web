const objetivos = [
  'Iluminação',                      // 2
  'Maestria de uma Habilidade Específica', // 3
  'Fama',                            // 4
  'Conhecimento',                   // 5
  'Amor',                            // 6
  'Poder',                           // 7
  'Segurança',                       // 8
  'Vingança',                        // 9
  'Riqueza',                         // 10
  'Justiça',                         // 11
  'Fazer o bem'                      // 12
];

const motivacoes = [
  'Caridade',     // 2
  'Dever',        // 3
  'Medo',         // 4
  'Ganância',     // 5
  'Amor',         // 6
  'Ódio',         // 7
  'Luxúria',      // 8
  'Paz',          // 9
  'Estabilidade', // 10
  'Excelência',   // 11
  'Loucura'       // 12
];

const virtudes = [
  'Caridoso',     // 2
  'Casto',        // 3
  'Corajoso',     // 4
  'Dedicado',     // 5
  'Honesto',      // 6
  'Humilde',      // 7
  'Justo',        // 8
  'Magnânimo',    // 9
  'Piedoso',      // 10
  'Devoto',       // 11
  'Sábio'         // 12
];

const vicios = [
  'Ganancioso',     // 2
  'Arrogante',      // 3
  'Avarento',       // 4
  'Covarde',        // 5
  'Cruel',          // 6
  'Tolo',           // 7
  'Devasso',        // 8
  'Mesquinho',      // 9
  'Preconceituoso', // 10
  'Conspirador',    // 11
  'Furioso'         // 12
];



export function aleatorizarPersonalidade() {
    const objetivo = objetivos[Math.floor(Math.random() * objetivos.length)];
    const motivacao = motivacoes[Math.floor(Math.random() * motivacoes.length)];
    const virtude = virtudes[Math.floor(Math.random() * virtudes.length)];
    const vicio = vicios[Math.floor(Math.random() * vicios.length)];
    
    return {
        objetivo,
        motivacao,
        virtude,
        vicio
    };
}