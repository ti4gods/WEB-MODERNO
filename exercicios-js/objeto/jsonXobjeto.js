const objeto = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return this.a + this.b + this.c
    }
}

console.log(objeto.soma()); //-> 6
 
// Objeto para JSON
console.log(JSON.stringify(objeto)) //-> {"a":1,"b":2,"c":3}

// JSON para objeto
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //-> { a: 1, b: 2, c: 3 }

const teste = JSON.parse('{"casa": 123,"carro":12,"aviao":1}')

console.log(teste.casa, teste.carro, teste.aviao, teste.d) //-> 123 12 1 undefined