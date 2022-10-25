function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(240, 218, 52)'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(232, 226, 184)'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(6,35, 51)'
    }
}