/* Ler a velocidade de um carro, e se ele passar de 80km/h
mostrar mensagem que foi multado e o valor da multa (R$ 7 por km excedente)
ou mostrar que está abaixo do limite de velocidade.
*/

var vel = window.prompt("Digite a velocidade")
    
if (vel <= 80) {
    alert('Você está dentro da velocidade permitida')
} else {
    alert(`Você ultrapassou ${vel - 80} km/h além da velocidade permitida, e a multa é R$ ${(vel - 80)*7}`)
}
    
