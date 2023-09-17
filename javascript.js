function verificadora() {
    let data = new Date();
    let ano = data.getFullYear();
    let ano_nascimento = document.getElementById('texto_ano_idade');
    let resposta = document.querySelector('div#resultado');
    if (ano_nascimento.value.length == 0 || ano_nascimento.value > ano) {
        window.alert('[ERRO] Idade não corresponde aos critérios de uma pessoa');
    } else {
        let tipo_sexo = document.getElementsByName('radio_sexo');
        let caucula_idade = ano - Number(ano_nascimento.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.setAttribute('class', 'imagem')
        if (tipo_sexo[0].checked) {
            genero = 'Masculino'
            if (caucula_idade >= 0 && caucula_idade <= 6) {
                // criança de colo
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_crianca_colo_masculino.jpg')
                img.setAttribute("class", "imagens-redimencionadas-crianca-colo-masculino")
            } else if (caucula_idade >= 7 && caucula_idade <= 12){
                // criança
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_crianca_masculino.jpg' )
                img.setAttribute("class", "imagens-redimencionadas-crianca-masculino")
            } else if (caucula_idade >= 13 && caucula_idade <= 18) {
                // adolescente
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_adolescente_masculino.jpg' )
                img.setAttribute("class", "imagens-redimencionadas")
            } else if (caucula_idade >= 19 && caucula_idade <= 35) {
                // adulto
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_adulto_masculino.jpg' )
            } else if (caucula_idade >= 36 && caucula_idade <= 50) {
                // adulto feito
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_homem_feito.jpg' )
            } else if (caucula_idade >= 51 && caucula_idade <= 90) {
                // idoso
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_idoso_masculino.jpg' )
            } else if (caucula_idade >= 91 && caucula_idade <= 120) {
                // ancião
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_anciao_masculino.jpg' )
                img.setAttribute("class", "imagens-redimencionadas-anciao-masculino")
            }
        }
        else if (tipo_sexo[1].checked) {
            genero = 'Femenino'
            if (caucula_idade >= 0 && caucula_idade <= 6) {
                // criança de colo
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_crianca_colo_femenino.jpg' )
                img.setAttribute("class", "imagens-redimencionadas-crianca-colo-femenina")
            } else if (caucula_idade >= 7 && caucula_idade <= 12){
                // criança
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_crianca_femenino.jpg' )
            } else if (caucula_idade >= 13 && caucula_idade <= 18) {
                // adolescente
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_adolescente_femenino.jpg' )
            } else if (caucula_idade >= 19 && caucula_idade <= 35) {
                // adulto
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_adulta_femenino.jpg' )
                img.setAttribute("class", "imagens-redimencionadas-adulta-femenina")
            } else if (caucula_idade >= 36 && caucula_idade <= 50) {
                // adulto feito
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_mulher_feita.jpg' )
            } else if (caucula_idade >= 51 && caucula_idade <= 90) {
                // idoso
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_idosa_femenino.jpg' )
            } else if (caucula_idade >= 91 && caucula_idade <= 125) {
                // ancião
                img.setAttribute('src', 'Imagens_modificadas_e_redimensionadas/modelo_anciao_femenino.jpg' )
            }
        }
        resposta.innerHTML = `<strong>Detectamos um gênero ${genero} com ${caucula_idade} anos</strong>`
        resposta.style.textAlign = 'center'
        resposta.appendChild(img)
    }
        
}