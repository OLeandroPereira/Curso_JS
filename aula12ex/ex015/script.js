function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var fasevida = ' '
        img.setAttribute('id', 'foto')



        if(fsex[0].checked){
            genero = 'Masculino'
            document.body.style.background=`#83c1e0`
        } else if (fsex[1].checked){
            genero = 'Feminino'
            document.body.style.background=`#e686cf`
        }



        if(idade >= 0 && idade < 10){
            fasevida = 'crianca'
        } else if (idade >= 10 && idade < 21){
            fasevida  = 'jovem'
        } else if (idade >= 21 && idade < 50){
           fasevida = 'adulto'
        } else {
            fasevida  = 'idoso'
        }
        
        var foto_res = `foto_${fasevida}_${genero.toLowerCase()}.jpg`
        img.setAttribute('src', foto_res)
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do gênero ${genero} com ${idade} anos.`
        if (idade == 1) {
            res.innerHTML = `Detectamos um bebê do gênero ${genero} com ${idade} ano.` 
        }
        
        res.appendChild(img)

    }
}





/*function verificar() { //função
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') //ano digitado pelo usuário
    var res = document.querySelector('div#res') //transforma res em variável
    if (fano.value.length == 0 || Number(fano.value) > ano) { //Para uma string vazia, length é 0. Se o valor digitado pelo usuário(fano) transformando em number(Number) for maior que o ano atual.
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') //A primeira opção do type="radio" é [0] e segunda é [1].
        var idade = ano - Number(fano.value) //Variável idade recebe o valor do ano atual subtraído pelo ano digitado pelo usuário.
        var gênero = '' //string vazia.
        var img = document.createElement('img') //Criação da tag img.
        img.setAttribute('id', 'foto') //Criação de uma id="foto", igual no html <img id="foto"
        if (fsex[0].checked) { //Se não, se checked estiver na opção Masculino.
            gênero = 'Masculino' //Será Masculino.
            if (idade >=0 && idade < 10) { // Se idade for maior ou igual a 0, e idade for menor que 10
                //Criança
                img.setAttribute('src', 'foto-bebe-m.jpg') //Será atribuído uma foto.
                document.body.style.background=`#FF665A`
                
            } else if (idade < 21) { // Se não, se idade for menor que 21.
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg') //Será atribuído uma foto.
                document.body.style.background=`#705E78`

            } else if (idade < 50) { // Se não, se idade for menor que 50.
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg') //Será atribuído uma foto.
                document.body.style.background=`#FFF587`

            } else if (idade <= 130) { // Se não, se idade for menor que 130.
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg') //Será atribuído uma foto.
                document.body.style.background=`#A3A1A8`

            } else if (idade > 131) { // Se não, se idade for menor que 131.

                window.alert ('Não encontramos no nosso sistema pessoa com essa idade') //Será alertado que não encontrou pessoa com essa idade no sistema.
            } 

        } else if (fsex[1].checked) { //Se não, se checked estiver na opção Feminino
            gênero = 'Feminino' //Será Feminino.
            if (idade >=0 && idade < 10) { // Se idade for maior ou igual a 0, e idade for menor que 10
                //Criança
                img.setAttribute('src', 'foto-bebe-f.jpg') //Será atribuído uma foto.
                document.body.style.background=`#FF8C64`

            } else if (idade < 21) { // Se não, se idade for menor que 21.
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg') //Será atribuído uma foto.
                document.body.style.background=`#A5AAA3`

            } else if (idade < 50) { // Se não, se idade for menor que 50
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg') //Será inserido uma foto.
                document.body.style.background=`#812F33`

            } else if (idade <= 130) { // Se não, se idade for menor, ou igual a 130.
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg') //Será atribuído uma foto.
                document.body.style.background=`#FEA443`

            } else if (idade > 131) { // Se não, se idade for maior que 131.

                window.alert ('Não encontramos no nosso sistema pessoa com essa idade') //Será alertado que não encontrou pessoa com essa idade no sistema.
            } 
        }
        res.style.textAlign = 'center' //Centraliza texto ao centro.
        res.innerHTML = `Detectamos uma pessoa do sexo ${gênero} com ${idade} anos.` //Será informado uma mensagem na tela.

        if (idade == 1) {
            res.innerHTML = `Detectamos uma pessoa do sexo ${gênero} com ${idade} ano.`
        }    

        res.appendChild(img) //Será adicionado uma foto equivalente a atribuição da condicional.
    }

}

*/