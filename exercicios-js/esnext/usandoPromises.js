// Exemplo utilizando promises

const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, (resposta) => {
            let resultado = ''

            resposta.on('data', (dados) => {
                resultado += dados
            })

            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (erro) {
                    reject(erro)
                }
            })
        })
    })
}

// let nomes = []

// getTurma('A').then((alunos) => {
//     nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`))
//     getTurma('B').then((alunos) => {
//         nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`))
//         getTurma('C').then((alunos) => {
//             nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// Modo ideal com Promises.
// Utilizando o Promise.all para fazer múltiplas chamadas assíncronas para a função
// getTurma e processar os resultados quando todas as Promises forem resolvidas.

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then((turmas) => [].concat(...turmas))
    .then((alunos) => alunos.map((aluno) => aluno.nome))
    .then((nomes) => console.log(nomes))

// Fazendo cair no erro:

getTurma('D').catch((erro) => console.log(erro.message))
// Unexpected token < in JSON at position 0
