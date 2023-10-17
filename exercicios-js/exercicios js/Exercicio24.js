// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

const mensagem = 'Hello World'
const quantidadeExecucoes = 11
let contador = 1 

while (contador <= quantidadeExecucoes) { 
    console.log(contador, mensagem)
    contador++
}
