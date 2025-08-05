// js/habilidades.js

export function Habilidades() {
    const valorPadrao = 2;
    let iniciou = false;

    const tabelaCustoGrad = {
        "1": -50,
        "2": 0,
        "3": 10,
    };

    const tabelaCustoEsp = {
        "1": 10,
        "2": 20,
        "3": 30,
    };

    this.getCustoGrad = function (valor) {
        const valorNum = Number(valor);

        if (valorNum <= 3) {
            return tabelaCustoGrad[valorNum] ?? 0;
        }

        // Custo base até nível 3 + 30 por nível acima
        return tabelaCustoGrad["3"] + (valorNum - 3) * 30;
    }

    this.getCustoEsp = function (valor) {
        console.log(`Valor recebido: ${valor}`);
        const valorNum = Number(valor);

        if (valorNum <= 3) {
            return tabelaCustoEsp[valorNum] ?? 0;
        }

        // Custo base até nível 3 + 10 por nível acima
        return tabelaCustoEsp["3"] + (valorNum - 3) * 10;
    }

    this.adicionarValorPad = function (inputsGrad, valor) {

        if (iniciou == false) {
            iniciou = true;
            for (const input of inputsGrad) {
                if (input.value === '') {
                    input.value = valor;
                }
            }
        }
        else {
            for (const input of inputsGrad) {
                input.value = valor;
            }
        }

    }

    this.xpIdadeInicial = function (idade, xpInputGrad, xpInputEsp) {
        if (idade >= 0 && idade <= 9) {
            xpInputGrad.value = 120;
            xpInputEsp.value = 40;
            this.idadeIdentificador = 'Criança';
        } else if (idade <= 13) {
            xpInputGrad.value = 150;
            xpInputEsp.value = 40;
            this.idadeIdentificador = 'Adolescente';
        } else if (idade <= 17) {
            xpInputGrad.value = 180;
            xpInputEsp.value = 60;
            this.idadeIdentificador = 'Jovem';
        } else if (idade <= 29) {
            xpInputGrad.value = 210;
            xpInputEsp.value = 80;
            this.idadeIdentificador = 'Adulto';
        } else if (idade <= 49) {
            xpInputGrad.value = 240;
            xpInputEsp.value = 100;
            this.idadeIdentificador = 'Meia-idade';
        } else if (idade <= 69) {
            xpInputGrad.value = 270;
            xpInputEsp.value = 160;
            this.idadeIdentificador = 'Velho';
        } else if (idade <= 79) {
            xpInputGrad.value = 330;
            xpInputEsp.value = 200;
            this.idadeIdentificador = 'Muito-velho';
        } else if (idade >= 80) {
            xpInputGrad.value = 360;
            xpInputEsp.value = 240;
            this.idadeIdentificador = 'Venerável';
        }

        return this.idadeIdentificador;
    }



    this.monitoradorDeIdade = function () {
        if (this.idadeIdentificador === 'Criança' || this.idadeIdentificador === 'Adolescente') {
            return 4;
        }
        else if (this.idadeIdentificador === "Jovem") {
            return 5;
        }
        else if (this.idadeIdentificador === "Adulto") {
            return 7;
        }
        else if (this.idadeIdentificador === "Meia-idade") {
            return 6;
        }
        else if (this.idadeIdentificador === "Velho" || this.idadeIdentificador === "Muito-velho" || this.idadeIdentificador === "Venerável") {
            return 5;
        }
    }

}