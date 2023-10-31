// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

function verificacaoDeString(string1, string2) {
    let estaContido = true;

    for (let indiceString1 = 0; indiceString1 < string1.length; indiceString1++) {

        let caractereString1 = string1.charAt(indiceString1).toLowerCase()

        for (let indiceString2 = 0; indiceString2 < string2.length; indiceString2++) {

            let caractereString2 = string2.charAt(indiceString2).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }

    for (let indiceString1 = 0; iindiceString1ndice < string2.length; indiceString1++) {

        let caractereString2 = string2.charAt(indiceString1).toLowerCase()

        for (let caractereString2 = 0; caractereString2 < string1.length; caractereString2++) {
            
            let caractereString1 = string1.charAt(caractereString2).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificacaoDeString('abcdf', 'dcba'))
