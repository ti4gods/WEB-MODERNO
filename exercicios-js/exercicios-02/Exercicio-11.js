// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo

function receberPrimeiroEUltimoElemento(meuArray) {
    let retornoArray = [];

    retornoArray.push(meuArray[0]);
    retornoArray.push(meuArray[meuArray.length -1]);

    return retornoArray
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"])) // retornará [7, "olá"] 
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]

function receberPrimeiroEUltimoElemento2(meuArray) {
    let retornoArray = [];

    for (let indice = 0; indice < meuArray.length; indice++) {
        if (indice === 0 || indice === meuArray.length-1) {
            retornoArray.push(meuArray[indice])
        }
    }

    return retornoArray
}

console.log(receberPrimeiroEUltimoElemento2([7,14,"olá"])) // retornará [7, "olá"] 
console.log(receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16])) // retornará [-100, 16]