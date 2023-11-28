function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then((valor) => `Valor: ${valor}`)
    .then((valor) => console.log(valor))
    .catch((erro) => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!'))
