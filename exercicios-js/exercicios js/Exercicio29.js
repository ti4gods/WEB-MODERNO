// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function imprimirIntervalos(vetor) {
    let contador10a20 = 0
    let contadorRestante = 0

    for (let indice = 0; indice < vetor.length; indice++) {

        if (vetor[indice] >= 10 && vetor[indice] <= 20) {
           contador10a20++ 
        } else {
            contadorRestante++
        }
    }  
    
    return `${contador10a20} números estão no intervalo entre 10-20 e ${contadorRestante} números restantes`
}


vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(imprimirIntervalos(vetor))