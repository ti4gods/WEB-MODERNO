const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(item => item.bolsista).reduce(todosBolsistas)) //-> false

// Algum aluno é bosista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(item => item.bolsista).reduce(algumBolsista)) //-> true