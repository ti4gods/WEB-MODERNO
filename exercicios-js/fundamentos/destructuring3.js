/**
 * Faz a desestruturação de um objeto através de uma função.
 */

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min

  return Math.floor(valor)
}

const objeto = { max: 50, min: 40 }
console.log(rand(objeto));

console.log(rand({min: 500}));
