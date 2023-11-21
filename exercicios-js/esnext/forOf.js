for (let letra of 'Cod3r') {
  console.log(letra)
}

// C
// o
// d
// 3
// r

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let indice in assuntosEcma) {
  console.log(indice)
}

// 0
// 1
// 2

for (let assunto of assuntosEcma) {
  console.log(assunto)
}

// Map
// Set
// Promise

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { acordado: true }],
  ['Promise', { acordado: false }],
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

// [ 'Map', { abordado: true } ]
// [ 'Set', { acordado: true } ]
// [ 'Promise', { acordado: false } ]

for (let chave of assuntosMap.keys()) {
  console.log(chave)
}

// Map
// Set
// Promi

for (let valor of assuntosMap.values()) {
  console.log(valor)
}

// { abordado: true }
// { acordado: true }
// { acordado: false }

for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor)
}

// Map { abordado: true }
// Set { acordado: true }
// Promise { acordado: false }

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}

// a
// b
// c