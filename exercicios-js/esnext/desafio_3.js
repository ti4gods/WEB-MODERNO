const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, 'utf-8')
            resolve(conteudo)
            console.log('Depois de ler')
        } catch (erro) {
            reject(erro)
        }
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then((conteudo) => conteudo.split('\n'))
    .then((linhas) => linhas.join(','))
    .then((conteudo) => console.log(`O valor final é: ${conteudo}`))
    .catch((erro) => console.error('Erro ao ler o arquivo:', erro))
