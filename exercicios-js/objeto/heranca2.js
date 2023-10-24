// Cadeia de protótipos (prototype chain)

// Exemplo 1)
Object.prototype.atributo0  = '0'

const avo = { 
    atributo1: 'A' 
}

const pai = { 
    __proto__: avo, 
    atributo2: 'B' 
}

const filho = { 
    __proto__: pai, 
    atributo3: 'C' 
}

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3) //-> 0 A B C

// Exemplo 2)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual =  this.velocidadeMaxima
        }
    },
    status () {
        return `${this.velocidadeAtual}km/h de ${this.velocidadeMaxima}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo o relacionamento entre ferrari/volvo com carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //->{ modelo: 'F40', velocidadeMaxima: 324 }
console.log(volvo) //-> { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status()) //-> V40: 100km/h de 200km/h
volvo.acelerarMais(190)
console.log(volvo.status()) //-> V40: 200km/h de 200km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) //-> 300km/h de 324km/h
ferrari.acelerarMais(199)
console.log(ferrari.status()) //-> 324km/h de 324km/h

