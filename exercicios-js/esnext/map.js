// Um Map é uma estrutura de dados que permite associar valores a chaves,
// onde as chaves podem ser de vários tipos, incluindo funções, objetos e números..

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// [Function (anonymous)] Função
// {} Objeto
// 123 Número

console.log(chavesVariadas.has(123)) // true
console.log(chavesVariadas.delete(123)) // true
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // 2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)

// Map(3) {
//   [Function (anonymous)] => 'Função',
//   {} => 'Objeto',
//   123 => 'b'
// }
