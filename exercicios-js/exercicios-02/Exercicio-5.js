// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(valor1, valor2) {
    const retorno = Number(valor1) >= Number(valor2) ? true : false;

    console.log(retorno)
} 

maiorOuIgual(0, 0) // true
maiorOuIgual(0, "0") // false
maiorOuIgual(5, 1) // false

