// Algumas funcionalidades
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//-> function

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}



const mensagem = 'Olá Tiago'
const variavel1 = mensagem.split('').reverse().join('')
const variavel2 = mensagem.reverse()

console.log(mensagem, variavel1, variavel2, 'Mensagem teste'.reverse()) //-> Olá Tiago ogaiT álO ogaiT álO etset megasneM

//---

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) //-> 1
console.log(['a', 'b', 'c'].first()) //-> 'a'