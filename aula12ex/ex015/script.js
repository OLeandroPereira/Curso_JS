function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
                
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else if (idade <= 130) {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            } else if (idade > 131) {

                window.alert ('Não encontramos no nosso sistema pessoa com essa idade')
            } 

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else if (idade <= 130) {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            } else if (idade > 131) {

                window.alert ('Não encontramos no nosso sistema pessoa com essa idade')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}