// Usando função construtora para criação de objeto

function MeuObjeto() {}
console.log(MeuObjeto.prototype) //-> {}

const objeto1 = new MeuObjeto
const objeto2 = new MeuObjeto
console.log(objeto1.__proto__ === objeto2.__proto__) //-> true
console.log(MeuObjeto.prototype === objeto1.__proto__) //-> true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

objeto1.falar() //-> Bom dia! Meu nome é Anônimo!

objeto2.nome = 'Tiago'
objeto2.falar() //-> Bom dia! Meu nome é Tiago!

const objeto3 = {}
objeto3.__proto__ = MeuObjeto.prototype
objeto3.nome = 'Objeto 3'
objeto3.falar() //-> Bom dia! Meu nome é Objeto 3!