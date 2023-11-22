// Em resumo, a Promise é resolvida com um array de nomes, e em cada etapa seguinte
// do encadeamento, uma operação é realizada no resultado da etapa anterior.
// O resultado final é o primeiro caractere do primeiro nome convertido para
// minúsculo, que é então impresso no console. O encadeamento de Promises fornece
// uma maneira elegante de lidar com operações assíncronas, evitando a chamada
// "callback hell" e tornando o código mais legível.

const primeiroElemento = (arrayOuString) => arrayOuString[0]
const letraMinuscula = (letra) => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

// a
