// o código cria uma Promise que resolve com a string 'Que legal!' após um atraso de 3 segundos,
// concatena '?!?' a essa string e imprime o resultado final ('Que legal!?!?') no console.

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal!')
  .then((frase) => frase.concat('?!?'))
  .then((outraFrase) => console.log(outraFrase))
  .catch((erro) => console.log(erro))
