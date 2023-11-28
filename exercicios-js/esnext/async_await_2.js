function gerarNumerosEntre(minimo, maximo, numerosProibidos) {
    if (minimo > maximo) {
        ;[maximo, minimo] = [minimo, maximo]
    }

    return new Promise((resolve, reject) => {
        const fator = maximo - minimo + 1
        const aleatorio = parseInt(Math.random() * fator) + minimo

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }

        return numeros
    } catch (error) {
        if (tentativas > 10) {
            throw 'Ocorreu um erro'
        } else {
            gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(8).then(console.log).catch(console.log)
