atrAtletismo = document.getElementById('atletismo')
rolarDados = document.getElementById('rolar')
rolagemResposta = document.getElementById('h1')



function roll(qtdDados){
    listaDados = []
    let soma = 0
    for (var i = 0; i < qtdDados; i++){
        dado = Math.floor(Math.random() * 6 + 1 )
        console.log(dado)
        listaDados.push(dado)
    }

    for (var n = 0; n < listaDados.length; n++ ){
        soma += listaDados[n]
    }

    rolagemResposta.innerHTML = soma
}

class ficha{
    constructor(atletismo){
        this.atletismo = atletismo
    }
}

ficha1 = new ficha(2)

function rolar(){
    roll(atrAtletismo.value)
}

