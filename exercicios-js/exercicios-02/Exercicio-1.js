// Crie uma função que retorna a string "Olá," concatenada com 
// um argumento text (a ser passado para a função) e com ponto de exclamação "!" no finally.
// Exemplos:
// cumprimentar("Leonardo") //retornará "Olá, Leonado!"
// cumprimentar("Maria") //retornará "Olá, Maria!"

const sinalDeExclamacao = "!"

function cumprimentar(nome, exclamação = sinalDeExclamacao) {
    return console.log(`Olá, ${nome}`.concat(exclamação))
    // return console.log(`Olá, ${nome}${exclamação}`)
}


cumprimentar("Leonardo") 
cumprimentar("Maria") 

