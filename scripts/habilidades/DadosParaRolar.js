export function RolarDados(nameButton) {

    this.informacoes = function (ativo = true, nameButton = '', graduacao = 2, especialidadeUnidade = []) {

        if (ativo === true) {
            ativo = false;

            let linhasEspecialidades = '';

            for (let i = 0; i < especialidadeUnidade.length; i++) {
                const nome = especialidadeUnidade[i].Nome;
                const valor = especialidadeUnidade[i].Valor;

                if (valor == 0) {
                    continue
                }

                linhasEspecialidades += `<p>/r ${graduacao}d6dl${valor} (${nome})</p>\n`;
            }

            if (linhasEspecialidades == '') {
                let pop_up = `
                <div class="popup">
                    <div class="pop_up_content">
                    <h1>${nameButton}</h1>
                    <p>/r ${graduacao}d6 (Natural)</p>
                    <button id="botao_fechar">Fechar</button>
                    </div>
                </div>`;
                return pop_up;
            } else {
                let pop_up = `
                <div class="popup">
                    <div class="pop_up_content">
                    <h1>${nameButton}</h1>
                    <p>/r ${graduacao}d6 (Natural)</p>
                    ${linhasEspecialidades}
                    <button id="botao_fechar">Fechar</button>
                    </div>
                </div>`;
                return pop_up;
            }




        } else if (ativo == false) {
            console.log('to aqui')
            ativo = true;
            let pop_up = ``;

            return pop_up;
        }

    }


    function rolagemDeDados() {

    }
}