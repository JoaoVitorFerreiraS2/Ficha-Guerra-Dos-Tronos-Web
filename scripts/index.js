// js/index.js
import { Habilidades } from './habilidades/habilidades.js';
import { aleatorizarPersonalidade } from './historico/personalida-aleatorizar.js';
import { Dados } from './Dados/Dados.js';
import { RolarDados } from './habilidades/DadosParaRolar.js';

const habilidadesObj = new Habilidades();
const dados = new Dados();
const rolarDados = new RolarDados();


// Pega elementos do HTML
// Abas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Valores padrões

const valorPadrao = 2;

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');

    console.log(`Aba ativada: ${button.dataset.tab}`);
    if (button.dataset.tab === 'historico') {
      initFicha.disabled = true;
    }
    else if (button.dataset.tab === 'habilidades') {
      initFicha.disabled = false;
    }
  });
})

window.addEventListener('DOMContentLoaded', () => {
  inputsGrad.forEach(input => {
    if (input.value === '') {
      input.disabled = true;
    }
  });
});



// Outros
const initFicha = document.querySelector('#button_iniciar');
const inputsGrad = document.querySelectorAll('.graduacaoPad');
const idadeInput = document.querySelector('#idadeP');
const salvarBtn = document.querySelector('#salvarBtn');
const aleatorizarPersonalidadeBtn = document.querySelector('#aleatorizar-personalidade');
let xpInputGrad = document.querySelector('#xp_grad');
let xpInputEsp = document.querySelector('#xp_esp');
const inputEsp = document.querySelectorAll('.especialida_unica input');
const barraDeVida = document.getElementById('barraDeVida');
const barraDeCompostura = document.getElementById('barraDeCompostura');
const defesaComposturaValor = document.getElementById('defesaComposturaValor');

// PopUp
const popUp = document.querySelector('.popUpFather');

// Clique nas habilidades

const botaoDado = document.querySelectorAll('.botaoDado');

// Intriga Soma
const statusInput = document.getElementById("statusGrad");
const percepcaoInput = document.getElementById("percepcaoGrad");
const astuciaInput = document.getElementById("astuciaGrad");
const vontadeInput = document.getElementById("vontadeGrad");
const composturaTotalh1 = document.getElementById("composturaTotalh1")

let composturaAtualAntiga;
let composturaTotal = 0
let composturaAtual = 0

// Saude
const vigorInput = document.getElementById('vigorGrad');
let vidaTotalh1 = document.getElementById('vidaTotalh1')

let vidaAtualAntiga;

let vidaTotal = 0;
let vidaAtual = 0;

const valoresAnterioresGrad = new Map();
const valoresAnterioresEsp = new Map();


function podeIniciar() {
  if (idadeInput.value === '') {
    alert('Preencha a idade');
    return false;
  }
  else if (idadeInput.value < 0 || idadeInput.value >= 131) {
    alert('Idade deve ser maior que 0 e menor que 131');
    return false;
  }
  else {
    habilidadesObj.adicionarValorPad(inputsGrad, valorPadrao);
    const idadeIdentificador = habilidadesObj.xpIdadeInicial(parseInt(idadeInput.value), xpInputGrad, xpInputEsp);
    const especialidadesInput = document.querySelectorAll('.especialidades input');
    console.log('Idade Identificador:', idadeIdentificador);

    initFicha.innerHTML = 'Reiniciar Ficha';
    initFicha.style.color = 'red';
    initFicha.style.fontWeight = 'bold';
    inputsGrad.forEach(input => {
      input.disabled = false;
    });
    especialidadesInput.forEach(input => {
      input.value = 0
    })



    let totalPontosSaude = parseInt(vigorInput.value) * 3;
    let saudeAtual = totalPontosSaude;
    vidaAtualAntiga = totalPontosSaude;
    verificarTotalSaude(totalPontosSaude, saudeAtual);

    let totalPontosCompostura = parseInt(vontadeInput.value) * 3;
    composturaAtual = totalPontosCompostura
    composturaAtualAntiga = totalPontosCompostura;
    verificarTotalCompostura(totalPontosCompostura, composturaAtual);

    defesaComposturaValor.value = astuciaInput.valueAsNumber + percepcaoInput.valueAsNumber + statusInput.valueAsNumber

  }

}

// Chamada de entrada
verificarTotalSaude()
verificarTotalCompostura()



function verificarTotalSaude(total = 3, atual = 3) {
  barraDeVida.innerHTML = '';

  vidaTotal = total;
  vidaAtual = atual;

  for (let i = 0; i < total; i++) {
    const bloco = document.createElement('div');
    bloco.classList.add('ponto_vida');

    if (i < atual) {
      bloco.classList.add('ativo_vida');
    }

    // Torna cada bloco clicável
    bloco.addEventListener('click', () => {
      if (bloco.classList.contains('ativo_vida')) {
        bloco.classList.remove('ativo_vida');
        vidaAtual--;
      } else if (vidaAtual < vidaTotal) {
        bloco.classList.add('ativo_vida');
        vidaAtual++;
      }

      vidaTotalh1.innerText = `Vida atual: ${vidaAtual}/${vidaTotal} (vigor ×3)`;
    });

    barraDeVida.appendChild(bloco);
  }

  vidaTotalh1.innerText = `Vida atual: ${vidaAtual}/${vidaTotal} (vigor ×3)`;
}

function verificarTotalCompostura(total = 3, atual = 3) {

  composturaTotal = total;
  composturaAtual = atual;
  barraDeCompostura.innerHTML = '';

  for (let i = 0; i < total; i++) {
    const bloco = document.createElement('div');
    bloco.classList.add('ponto_compostura');

    if (i < atual) {
      bloco.classList.add('ativo_compostura');
    }

    // Torna cada bloco clicável
    bloco.addEventListener('click', () => {
      if (bloco.classList.contains('ativo_compostura')) {
        bloco.classList.remove('ativo_compostura');
        composturaAtual--;
      } else if (composturaAtual < composturaTotal) {
        bloco.classList.add('ativo_compostura');
        composturaAtual++;
      }

      composturaTotalh1.innerText = `Compostura Atual: ${composturaAtual}/${composturaTotal} (Vontade ×3)`;
    });

    barraDeCompostura.appendChild(bloco);
  }

  composturaTotalh1.innerText = `Compostura atual: ${composturaAtual}/${composturaTotal} (Vontade ×3)`;
}


initFicha.addEventListener('click', () => {
  podeIniciar();
});

salvarBtn.addEventListener('click', () => {
  alert('Função de salvar ainda não implementada');
});


// Inputs de graduação
inputsGrad.forEach(input => {
  valoresAnterioresGrad.set(input, 2);

  input.addEventListener('input', (event) => {

    if (event.target.value === '') {

    }
    else if ((event.target.value >= 8 || event.target.value <= 0) && event.target.name !== "Status") {
      alert('Valor inválido. Deve ser entre 1 e 7.');
      event.target.value = valoresAnterioresGrad.get(input);
      return;
    }
    else {
      let max_grad = habilidadesObj.monitoradorDeIdade();
      console.log(`Valor máximo permitido: ${max_grad}`);

      if (event.target.value > max_grad && event.target.name !== "Status") {
        alert(`Você é ${habilidadesObj.idadeIdentificador}. Valor máximo permitido: ${max_grad}`);
        event.target.value = valoresAnterioresGrad.get(input);
        return;
      }
      else {
        const novoValor = Number(event.target.value);
        const anterior = valoresAnterioresGrad.get(input);
        const custoNovo = habilidadesObj.getCustoGrad(novoValor);
        const custoAnterior = habilidadesObj.getCustoGrad(anterior);

        const diferenca = custoNovo - custoAnterior;

        xpInputGrad.value = Number(xpInputGrad.value) - diferenca;

        if (xpInputGrad.value < 0) {
          alert('Experiência insuficiente. Valor revertido.');
          event.target.value = valoresAnterioresGrad.get(input);
          xpInputGrad.value = Number(xpInputGrad.value) + diferenca;
          return;
        }

        valoresAnterioresGrad.set(input, novoValor);
        defesaComposturaValor.value = astuciaInput.valueAsNumber + percepcaoInput.valueAsNumber + statusInput.valueAsNumber

        let totalPontosSaude = parseInt(vigorInput.value) * 3;
        if (totalPontosSaude != vidaAtualAntiga) {
          verificarTotalSaude(totalPontosSaude, totalPontosSaude); // vida cheia,
        }


        let totalPontosCompostura = parseInt(vontadeInput.value) * 3;
        if (totalPontosCompostura != composturaAtualAntiga) {
          verificarTotalCompostura(totalPontosCompostura, composturaAtual);
        }
      }
    }
  });
});

// Inputs de especialidade
inputEsp.forEach(input => {
  valoresAnterioresEsp.set(input, 0);

  input.addEventListener('input', (event) => {
    if (event.target.value === '') {
      // Não faz nada se o campo estiver vazio
    } else if (event.target.value < 0) {
      event.target.value = valoresAnterioresEsp.get(input);
    } else {

      const container = event.target.closest(".atributos")
      const graduacao = container.querySelector('.graduacoes input');
      console.log(input.value)
      if (input.value > graduacao.value) {
        alert(`Sua graduação em ${graduacao.name} é ${graduacao.value}, ou seja, suas especialidades que dependem de ${graduacao.name} só podem ir até ${graduacao.value}`)
        input.value -=1;
      } else {
        const novo = Number(event.target.value);
        const anterior = valoresAnterioresEsp.get(input);
        const custoNovo = habilidadesObj.getCustoEsp(novo);
        const custoAnterior = habilidadesObj.getCustoEsp(anterior);

        const diferenca = custoNovo - custoAnterior;

        xpInputEsp.value = Number(xpInputEsp.value) - diferenca;

        if (xpInputEsp.value < 0) {
          alert('Experiência insuficiente. Valor revertido.');
          event.target.value = valoresAnterioresEsp.get(input);
          xpInputEsp.value = Number(xpInputEsp.value) + diferenca;
          return;
        }

        valoresAnterioresEsp.set(input, novo);
      }
    }
  });
});

botaoDado.forEach(button => {
  button.addEventListener('click', (event) => {
    const nameButton = event.target.innerHTML;
    const container = event.target.closest(".atributos")

    const graduacao = container.querySelector('.graduacoes input').value;

    const especialidadeInput = container.querySelectorAll('.especialidades input');
    const especialidadeNome = container.querySelectorAll('.especialidades label')
    const especialidadeUnidade = [];

    for (let i = 0; i < especialidadeInput.length; i++) {
      const nome = especialidadeInput[i].nextElementSibling.innerText;
      const valor = parseInt(especialidadeInput[i].value) || 0;

      especialidadeUnidade.push({ Nome: nome, Valor: valor });
    }
    console.log(especialidadeUnidade)



    popUp.innerHTML = rolarDados.informacoes(true, nameButton, graduacao, especialidadeUnidade);

    const botao_fechar = document.querySelector("#botao_fechar")

    botao_fechar.addEventListener('click', (event) => {
      popUp.innerHTML = rolarDados.informacoes('', false)
    })

  })
})



// Historico

aleatorizarPersonalidadeBtn.addEventListener('click', () => {
  const personalidade = aleatorizarPersonalidade();
  const objetivoInput = document.querySelector('#objetivoHi');
  const motivacaoInput = document.querySelector('#motivacaoHi');
  const virtudeInput = document.querySelector('#virtudeHi');
  const vicioInput = document.querySelector('#vicioHi');

  objetivoInput.placeholder = `Ex: ${personalidade.objetivo}`;
  motivacaoInput.placeholder = `Ex: ${personalidade.motivacao}`;
  virtudeInput.placeholder = `Ex: ${personalidade.virtude}`;
  vicioInput.placeholder = `Ex: ${personalidade.vicio}`;

})