// Valores padrões

const valorPadrao = 2
let idadeIdentificador;

const tabelaCusto = {
    "-1": -50,
    "1": 10,
    "2": 0,  // padrão, sem custo
    "3": 40,
    "4": 70,
    "5": 100,
    "6": 130
};

// Elementos do HTML

const initFicha = document.querySelector('.button_iniciar');
const inputsGrad = document.querySelectorAll('.graduacaoPad')
const idadeInput = document.querySelector('#idadeP');
let xpInput = document.querySelector('#xpP');


const valoresAnteriores = new Map(); // Guarda o valor antigo de cada input


function podeIniciar() {
    // Verifica campos que são necessários para iniciar a ficha

    if (idadeInput.value === '') {
        alert('Preencha a idade');
    }
    else {
        if (!idadeInput.value.match(/^\d+$/)) {
            alert('Idade deve ser um número');
        }
        if (idadeInput.value < 0 || idadeInput.value >= 131) {
            alert('Idade deve ser maior que 0 e menor que 131')
        }
        else {
            alert('Ficha iniciada com sucesso!');
            // Adiciona o valor padrão aos inputs de graduação
            adicionarValorPad(valorPadrao);

            // Adicionando XP
            xpIdadeInicial(parseInt(idadeInput.value));
        }
    }
}

function xpIdadeInicial(idade) {
    if (idade >= 0 && idade <= 9) {
        xpInput.value = 120;
        idadeIdentificador = 'Criança';
    }
    if (idade > 9 && idade <= 13) {
        xpInput.value = 150;
        idadeIdentificador = 'Adolescente';
    }
    if (idade > 13 && idade <= 17) {
        xpInput.value = 180;
        idadeIdentificador = 'Jovem';
    }
    if (idade >= 18 && idade <= 29) {
        xpInput.value = 210;
        idadeIdentificador = 'Adulto';
    }
    if (idade >= 30 && idade <= 49) {
        xpInput.value = 240;
        idadeIdentificador = 'Meia-idade';
    }
    if (idade >= 50 && idade <= 69) {
        xpInput.value = 270;
        idadeIdentificador = 'Velho';
    }
}

function adicionarValorPad(valorPadrao) {
    for (input of inputsGrad) {
        if (input.value === '') {
            input.value = valorPadrao;
        }
    }
}

function calcularCustoExp(graduacao = 0) {
    for (input of inputsGrad) {
        console.log(input.value)
    }
}

function getCusto(valor) {
    return tabelaCusto[valor] ?? 0;
}

initFicha.addEventListener('click', () => {
    podeIniciar();
});

inputsGrad.forEach(input => {
    valoresAnteriores.set(input, 2); // Valor padrão é 2

    input.addEventListener('input', (event) => {
        const novo = Number(event.target.value);
        const anterior = valoresAnteriores.get(input);

        const custoNovo = getCusto(novo);
        const custoAnterior = getCusto(anterior);

        const diferenca = custoNovo - custoAnterior;

        xpInput.value = Number(xpInput.value) - diferenca;

        valoresAnteriores.set(input, novo); // Atualiza
    });
});



