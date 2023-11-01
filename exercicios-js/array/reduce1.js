// Processa um array retornando apenas um valor final
// Pode receber como parâmetro um valor inicial

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

console.log(alunos.map(item => item.nota)) //-> [ 7.3, 9.2, 9.8, 8.7 ]
const somatorioDasNotas = alunos.map(item => item.nota).reduce(function(acumulador, valorAtual) {
   console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0)

console.log(somatorioDasNotas) //-> 35
