/* 
#Escreva um programação que faça o computador "pensar" em um número inteiro entre 0 e 5 e 
# peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
#O programa deverá escrever na tela se o usuário na tela se o usuário venceu ou perdeu.
*/



let numero = Math.floor(Math.random()*6)
console.log(numero)
let entrada = prompt("Digite um número entre 0 e 5")
if(numero == entrada) {
    alert(`Acertou, o número era ${numero}`)
} else {
    alert(`Você errou, o número era ${numero}`)
}

