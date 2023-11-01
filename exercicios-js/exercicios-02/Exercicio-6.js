// Escreva uma função que receba um valor booleano ou numérico. 
// Se o parâmetro fornecido for booleano, retorn da função deverá ser o inverso.
// Por exemplo, se a entrada for false, retornará true.
// Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados,
// mas o parâmetro é do tipo ..."

function inverso(valor) {
    switch (typeof valor) {
        case 'boolean':
            return console.log(!valor)
        case 'number':
            return console.log(valor < 0 ? Math.abs(valor) : -valor)
        default:
            return console.log("booleano ou número esperados, mas o parâmetro é do tipo string")
    } 
}

inverso(true) //false
inverso("6") // "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // 2000
inverso("programação") //"booleano ou número esperados, mas o parâmetro é do tipo string"

