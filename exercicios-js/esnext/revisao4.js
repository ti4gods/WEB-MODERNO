// Operador ... rest (juntar) / spread (espalhar)
// Usar rest com parâmetro de função
// Usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log(funcionario) // { nome: 'Maria', salario: 12348.99 }
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoA)     // [ 'João', 'Pedro', 'Gloria' ]
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]
