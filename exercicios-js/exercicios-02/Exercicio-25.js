// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
// que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
// minúsculas.

function contarCaractere1(caractereBuscado, frase) {
    let contador = 0

    for (let indice = 0; indice < frase.length; indice++) {
        if (frase.charAt(indice) === caractereBuscado) {
            contador++
        }
    }
    
    return contador
}


console.log('Utilizando FOR -', contarCaractere1("r", "A sorte favorece os audazes")) // retornará 2
console.log('Utilizando FOR -', contarCaractere1("c", "Conhece-te a ti mesmo")) // retornará 1

function contarCaractere2(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}

console.log('Utilizando FILTER -', contarCaractere2("r", "A sorte favorece os audazes")) // retornará 2
console.log('Utilizando FILTER -', contarCaractere2("c", "Conhece-te a ti mesmo")) // retornará 1