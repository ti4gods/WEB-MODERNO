// Exemplo utilizando callbacks aninhadas (Callback hell), porém sendo mais funcional com o uso de promises.
// 
// Esse código em JavaScript usa o módulo http para fazer requisições HTTP e
// obter dados de diferentes turmas de alunos de uma fonte online.
// O código faz uso de callbacks para lidar com o assincronismo das requisições.

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, (resposta) => {
        let resultado = ''

        resposta.on('data', (dados) => {
            resultado += dados
        })

        resposta.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`))
    getTurma('B', (alunos) => {
        nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`))
        getTurma('C', (alunos) => {
            nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

// [
//     ('A: Kellia',
//     'A: Hi',
//     'A: Inge',
//     'A: Myrle',
//     'A: Doreen',
//     'A: Pennie',
//     'A: Faye',
//     'A: Leena',
//     'A: Taylor',
//     'A: Juieta',
//     'B: Rossie',
//     'B: Mary',
//     'B: Dionysus',
//     'B: Myca',
//     'B: Sharlene',
//     'B: Meghan',
//     'B: Perice',
//     'B: Micheil',
//     'B: Nat',
//     'B: Bone',
//     'C: Kellina',
//     'C: Barrie',
//     'C: Darda',
//     'C: Rainer',
//     'C: Joan',
//     'C: Kasper',
//     'C: Sammie',
//     'C: Scott',
//     'C: Kiel',
//     'C: Dell')
// ]

// {
//   id: 1,
//   nome: 'Kellia',
//   imagem: 'https://robohash.org/sedsolutaeligendi.png?size=50x50&set=set1'
// }
