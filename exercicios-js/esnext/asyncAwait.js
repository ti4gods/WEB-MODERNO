// Recurso do ES8

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

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then((alunos) => alunos.map((aluno) => aluno.nome))
    .then((nomes) => console.log(nomes))

// [
//     ('Kellia',
//     'Hi',
//     'Inge',
//     'Myrle',
//     'Doreen',
//     'Pennie',
//     'Faye',
//     'Leena',
//     'Taylor',
//     'Juieta',
//     'Rossie',
//     'Mary',
//     'Dionysus',
//     'Myca',
//     'Sharlene',
//     'Meghan',
//     'Perice',
//     'Micheil',
//     'Nat',
//     'Bone',
//     'Kellina',
//     'Barrie',
//     'Darda',
//     'Rainer',
//     'Joan',
//     'Kasper',
//     'Sammie',
//     'Scott',
//     'Kiel',
//     'Dell')
// ]
