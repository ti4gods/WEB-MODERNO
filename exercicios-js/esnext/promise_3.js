function gerarNumerosEntre(minimo, maximo) {
    if (minimo > maximo) {
        ;[maximo, minimo] = [minimo, maximo]
    }

    return new Promise((resolve) => {
        const fator = maximo - minimo + 1
        const aleatorio = parseInt(Math.random() * fator) + minimo
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then((numero) => numero * 10)
    .then((numeroX10) => `Onúmero gerado foi ${numeroX10}`)
    .then(console.log)
