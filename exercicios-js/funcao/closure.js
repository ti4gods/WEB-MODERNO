// Closure É o escopo criado quando uma função é declarada.
// Esse escopo perite a função acessar e manipular variáveis externas a função.

const x = "Global";

function fora() {
    const x = "Local";

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao())

//-> "Local"
