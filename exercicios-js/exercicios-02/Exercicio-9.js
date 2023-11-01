// Escreva uma função que receba 2 parâmetros. O primeiro parâmetro é o elemento que repetirá,
// enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(elemento, quantidadeRepeticao) {
    let arrayRetornado = [];

    for (let indice = 1; indice = quantidadeRepeticao; indice++) {
        arrayRetornado.push(elemento);
    }

    return arrayRetornado;
}


console.log(repetir("código", 2)) //["código"2 "código"]
console.log(repetir(7, 3)) // [7, 7, 7]