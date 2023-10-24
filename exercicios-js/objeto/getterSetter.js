const sequencia = {
    _valor: 1, //o "_" é uma conversão para indicar que o atributo é candidado a ser privado
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

// A cada chamada no get valor faz o incremento 
console.log(sequencia.valor, sequencia.valor, sequencia.valor)  //-> 1, 2, 3

// Alterando o atributo valor (invocando o set) e alterando o valor desde que atenda a regra aplicada
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor, sequencia.valor) //-> 1000, 1001, 1002
