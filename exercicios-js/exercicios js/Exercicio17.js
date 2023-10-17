// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularReajusteSalarial(planoSalarial, salarioAtual) {
    const dezPorCentro = 10
    const quinzePorCento = 15
    const vintePorCento = 20

    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        return 'O salário informado não é válido';
    }
    
    switch (planoSalarial) {
        case 'A':
            return salarioAtual + ((salarioAtual / 100) * dezPorCentro)
        case 'B':
            return salarioAtual + ((salarioAtual / 100) * quinzePorCento) 
        case 'C':
            return salarioAtual + ((salarioAtual / 100) * vintePorCento) 
        default:
            return 'O plano informado não é válido'
    }
}

const planoA = 'A'
const planoB = 'B'
const planoC = 'C'

console.log(calcularReajusteSalarial(planoA, 7580));
console.log(calcularReajusteSalarial(planoB, 7580));
console.log(calcularReajusteSalarial(planoC, 7580));
console.log(calcularReajusteSalarial('D', 7580));