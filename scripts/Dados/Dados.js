// Pegar os dados

export function Dados() {
    
    // Rascunho
    // export class Dados {
    //     constructor() { }

    //     coletarDados() {
    //         const dados = {
    //             nome: document.getElementById('nomeJogador')?.value || '',
    //             classe: document.getElementById('classeJogador')?.value || '',
    //             raca: document.getElementById('racaJogador')?.value || '',
    //             nivel: parseInt(document.getElementById('nivelJogador')?.value || '1'),
    //             idade: parseInt(document.getElementById('idadeP')?.value || '0'),

    //             // Atributos
    //             vigor: parseInt(document.getElementById('vigorGrad')?.value || '0'),
    //             vontade: parseInt(document.getElementById('vontadeGrad')?.value || '0'),
    //             percepcao: parseInt(document.getElementById('percepcaoGrad')?.value || '0'),
    //             astucia: parseInt(document.getElementById('astuciaGrad')?.value || '0'),
    //             status: parseInt(document.getElementById('statusGrad')?.value || '0'),

    //             // Vida / Compostura
    //             vidaAtual: window.vidaAtual ?? 0,
    //             vidaTotal: window.vidaTotal ?? 0,
    //             composturaAtual: window.composturaAtual ?? 0,
    //             composturaTotal: window.composturaTotal ?? 0,

    //             // XP
    //             xpGrad: parseInt(document.getElementById('xp_grad')?.value || '0'),
    //             xpEsp: parseInt(document.getElementById('xp_esp')?.value || '0'),

    //             // Histórico
    //             objetivo: document.getElementById('objetivoHi')?.value || '',
    //             motivacao: document.getElementById('motivacaoHi')?.value || '',
    //             virtude: document.getElementById('virtudeHi')?.value || '',
    //             vicio: document.getElementById('vicioHi')?.value || '',
    //         };

    //         return dados;
    //     }

    //     salvarDados() {
    //         const dados = this.coletarDados();
    //         const json = JSON.stringify(dados, null, 2);
    //         console.log('Dados salvos:', json);

    //         // Para exportar JSON futuramente:
    //         const blob = new Blob([json], { type: 'application/json' });
    //         const url = URL.createObjectURL(blob);

    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'ficha.json';
    //         a.click();
    //         URL.revokeObjectURL(url);
    //     }
    // }

}