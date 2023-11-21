// ES8: Object.values/Object.entries
const objeto = { a: 1, b: 2, c: 3 }

console.log(Object.values(objeto)) // [ 1, 2, 3 ]
console.log(Object.entries(objeto)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal
const nome = 'Tiago'
const pessoa = {
  nome,
  ola() {
    return 'Oi gente!'
  },
}

console.log(pessoa.nome, '-', pessoa.ola()) // Tiago - Oi gente!

// Classes
class Animal {}
class Cachorro extends Animal {
  latir() {
    return 'Au au!'
  }
}

console.log(new Cachorro().latir()) // Au au!
