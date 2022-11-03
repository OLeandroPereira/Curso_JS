function adicionar() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('selres')
    if (num.value.length == 0) {
        window.alert('Preencha o campo, Por favor!')
    } else {
        res.innerHTML = `test ${res}`
        
    }
}