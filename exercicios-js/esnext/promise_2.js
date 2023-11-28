// Utilizando call back:

// setTimeout(function () {
//     console.log('Executando callback 1...')

//     setTimeout(function () {
//         console.log('Executando callback 2...')

//         setTimeout(function () {
//             console.log('Executando callback 3...')
//         }, 2000)
//     }, 2000)
// }, 2000)

// Utilizando promise:

function esperarPor(tempo = 2000, numero) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(`Executando promise ${numero}...`)
            resolve(numero + 1)
        }, tempo)
    })
}

let numero = 1

esperarPor(1000, numero)
    .then((novoNumero) => esperarPor(2000, novoNumero))
    .then((novoNumero) => esperarPor(3000, novoNumero))
    .then((novoNumero) => {
        console.log('Promessas concluídas!')
    })
    .catch((erro) => {
        console.error('Erro:', erro)
    })

// esperarPor()
//     .then(() => esperarPor())
//     .then(esperarPor)
