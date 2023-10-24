function Aula(nome, idVideo) {
    this.nome = nome
    this.idVideo = idVideo
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2) //-> Aula { nome: 'Bem vindo', idVideo: 123 } Aula { nome: 'Até Breve', idVideo: 456 }

// Simulando o new
function novo (funcao, ...parametros) {
    const objeto = {}
    objeto.__proto__ = funcao.prototype
    funcao.apply(objeto, parametros)
    return objeto
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)

//-> Aula { nome: 'Bem vindo', idVideo: 123 } Aula { nome: 'Até Breve', idVideo: 456 }
