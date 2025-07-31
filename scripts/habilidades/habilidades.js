// js/habilidades.js

export const valorPadrao = 2;

export const tabelaCustoGrad = {
    "1": -50,
    "2": 0,
    "3": 10,
};

export const tabelaCustoEsp = {
    "1": 10,
    "2": 20,
    "3": 30,
};

export function getCustoGrad(valor) {
    console.log(`Valor recebido: ${valor}`);
    const valorNum = Number(valor);

    if (valorNum <= 3) {
        return tabelaCustoGrad[valorNum] ?? 0;
    }

    // Custo base até nível 3 + 30 por nível acima
    return tabelaCustoGrad["3"] + (valorNum - 3) * 30;
}

export function getCustoEsp(valor) {
    console.log(`Valor recebido: ${valor}`);
    const valorNum = Number(valor);

    if (valorNum <= 3) {
        return tabelaCustoEsp[valorNum] ?? 0;
    }

    // Custo base até nível 3 + 10 por nível acima
    return tabelaCustoEsp["3"] + (valorNum - 3) * 10;
}
export function adicionarValorPad(inputsGrad, valor) {
    for (const input of inputsGrad) {
        if (input.value === '') {
            input.value = valor;
        }
    }
}

export function xpIdadeInicial(idade, xpInputGrad, xpInputEsp) {
    let idadeIdentificador;
    if (idade >= 0 && idade <= 9) {
        xpInputGrad.value = 120;
        xpInputEsp.value = 40;
        idadeIdentificador = 'Criança';
    } else if (idade <= 13) {
        xpInputGrad.value = 150;
        xpInputEsp.value = 40;
        idadeIdentificador = 'Adolescente';
    } else if (idade <= 17) {
        xpInputGrad.value = 180;
        xpInputEsp.value = 60;
        idadeIdentificador = 'Jovem';
    } else if (idade <= 29) {
        xpInputGrad.value = 210;
        xpInputEsp.value = 80;
        idadeIdentificador = 'Adulto';
    } else if (idade <= 49) {
        xpInputGrad.value = 240;
        xpInputEsp.value = 100;
        idadeIdentificador = 'Meia-idade';
    } else if (idade <= 69) {
        xpInputGrad.value = 270;
        xpInputEsp.value = 160;
        idadeIdentificador = 'Velho';
    } else if (idade <= 79) {
        xpInputGrad.value = 330;
        xpInputEsp.value = 200;
        idadeIdentificador = 'Muito-velho';
    } else if (idade >= 80){
        xpInputGrad.value = 360;
        xpInputEsp.value = 240;
        idadeIdentificador = 'Venerável';
    }
    return idadeIdentificador;
}
