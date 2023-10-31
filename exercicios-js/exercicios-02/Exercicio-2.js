// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
// desconsidere também dias decorridos desde o último aniversário

const diasDoAno = 365

function converterIdadeEmAnosParaDias(idadePessoa) {
    const diasDeVida = idadePessoa * diasDoAno

    return console.log(
        `A pessoa com ${idadePessoa} anos possui ${diasDeVida} dias de vida`
    )
}

converterIdadeEmAnosParaDias(25) // 9125
converterIdadeEmAnosParaDias(70) // 25550
converterIdadeEmAnosParaDias(32) // 11680 

