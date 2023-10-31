// Desenvolva uma função que recebe dois parâmetros, um é a quantidade e horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string 
// "Salário igual aR$X", em que X é quanto o funcionário ganhou no mês.

function calcularSalario(quantidadeHorasTrabalhadas, valorHora) {
    const salario = quantidadeHorasTrabalhadas * valorHora

    return console.log(`Salário igual R$ ${salario}`)
}


calcularSalario(150, 40.5) // "Salário igual a R$ 6075"
