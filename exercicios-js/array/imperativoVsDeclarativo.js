const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
]

// Imperativo - Se preocupa COMO deve ser feito
let total1 = 0

for (let indice = 0; indice < alunos.length; indice++) {
    total1 += alunos[indice].nota
}
console.log(total1 / alunos.length)

// Declarativo - Se preocupa com O QUE deve ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma, 0) // Note que passei 0 como valor inicial para a redução
console.log(total2 / alunos.length) //-> 8.55