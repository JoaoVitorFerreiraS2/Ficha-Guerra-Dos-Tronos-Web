fetch('./got.json')
    .then(response => response.json())
    .then(dados => {
        const container = document.querySelector('.atributos_father');

        Object.entries(dados.habilidades).forEach(([nome, valor]) => {
            const atributoDiv = document.createElement('div');
            atributoDiv.classList.add('atributos');

            // Cria HTML base da habilidade
            atributoDiv.innerHTML = `
                    <div class="graduacoes">
                    <input type="text" value="${valor.padValor}">
                    </div>
                    <div class="habilidades">
                    <button class="botaoDado">${nome}</button>
                    </div>
                    <div class="especialidades"></div>
                `;

            // Cria lista de especialidades (checkboxes)
            const especialidadesContainer = atributoDiv.querySelector('.especialidades');
            const ul = document.createElement('ul');


            if (valor.especialidades.length > 0) {

                valor.especialidades.forEach((esp, index) => {
                    const inputTextID = `${nome.replace(/\s/g, '_')}_esp_${index}`;
                    const li = document.createElement('li');
                    li.innerHTML = `
                                <div class="especialida_unica">
                                <input type="text" id="${inputTextID}" name="${nome}" value="0">
                                <label for="${inputTextID}">${esp}</label>
                                </div>
                    `;

                    ul.appendChild(li);
                })
                especialidadesContainer.appendChild(ul);
            } else {
                console.log('to aqui');
                const li = document.createElement('li');
                li.innerHTML = `
                        <div class="especialida_unica">
                        <textarea placeholder="Valiriano" style="resize: vertical; min-width: 400px"></textarea>
                        </div>
                    `;
                ul.appendChild(li);
                especialidadesContainer.appendChild(ul);
            }
            container.appendChild(atributoDiv);
        });
    })
    .catch(err => console.error('Erro ao carregar JSON:', err));



document.addEventListener('click', function (e) {
    const botaoHabilidade = e.target.closest('.botaoDado');
    if (botaoHabilidade) {
        alert(`Clicou em ${botaoHabilidade.innerText}`);
    }
});
