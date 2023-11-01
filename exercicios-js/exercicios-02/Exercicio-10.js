// Elabore uma função que recebe um número como parâmetro e retorne uma string como símbolo "+"
// na quantidade especificada no parâmetro.

function simboloMais(numero) {
    let stringRetorno = '';

    for (let indice = 1; indice <= numero; indice++) {
        stringRetorno = stringRetorno.concat('+');
    }

    return stringRetorno;
}

console.log(simboloMais(2)) //++
console.log(simboloMais(4)) //++++
