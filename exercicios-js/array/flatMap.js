// Obtendo todas as notas da escola, independente da turma

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) //-> [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

Array.prototype.flatMap = function(funcaoCallback) {
    return Array.prototype.concat.apply([], this.map(funcaoCallback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) //-> [ 8.1, 9.3, 8.9, 7.3 ]