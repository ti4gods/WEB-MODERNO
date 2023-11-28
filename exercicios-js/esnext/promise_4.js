function gerarNumerosEntre(minimo, maximo, tempo) {
    if (minimo > maximo) {
        ;[maximo, minimo] = [minimo, maximo]
    }

    return new Promise((resolve) => {
        setTimeout(function () {
            const fator = maximo - minimo + 1
            const aleatorio = parseInt(Math.random() * fator) + minimo
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })

// [ 47, 8, 17, 41, 19, 6 ]
// promise: 4.013s
