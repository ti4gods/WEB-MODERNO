/**
 * ARGUMENTS = LISTA DE PARÂMETROS.
 */
function somar() {
    let soma = 0;

    for (let indice in arguments) {
        soma += arguments[indice];
    };

    return soma;
}

console.log(somar());
console.log(somar(1));
console.log(somar(1.1, 2.2, 3.3));
console.log(somar(1.1, 2.2, 'teste'));
console.log(somar('a', 'b', 'c'));
