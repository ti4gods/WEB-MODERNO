const a = 1
const b = 2
const c = 3

const objeto1 = { a: a, b:b, c:c }
const objeto2 = { a, b, c }

console.log(objeto1, objeto2)

const nomeAtributo = 'nota'
const valorAributo = 7.87

const objeto3 = {}
objeto3[nomeAtributo] = valorAributo;
console.log(objeto3) //-> { nota: 7.87 }

const objeto4 = {[nomeAtributo]: valorAributo}
console.log(objeto4) //-> { nota: 7.87 }

// Melhorias disponibilizadas no ES6 na declaração de funções de um objeto
const objeto5 = {

    //modo antigo:
    funcao1: function() {
        //...
    },
    //modo novo:
    funcao2() {
        //...
    }
}

console.log(objeto5) //-> { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }