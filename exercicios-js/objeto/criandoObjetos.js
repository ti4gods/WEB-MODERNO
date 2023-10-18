/**
 * Formas de criar objeto em JS
 */

// 1 - Usando a notação literal
const objeto1 = {}
console.log(objeto1)

// 2 - Usando a função Objetc
const objeto2 = new Object
console.log(objeto2)

// 3 - Usando funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome //this utilizado para setar o atributo como sendo público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const produto1 = new Produto('Caneta', 7.99, 0.15)
const produto2 = new Produto('Notebook', 2887, 0.55)

console.log(produto1, produto2)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

// 4 - Usando uma função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('João', 7980, 4)
const funcionario2 = criarFuncionario('Maria', 11400, 1)

console.log(funcionario1, funcionario2)
console.log(funcionario1.getSalario(), funcionario2.getSalario())

// 5 - Usando o Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//console.log(typeof Object, typeof new Object)
