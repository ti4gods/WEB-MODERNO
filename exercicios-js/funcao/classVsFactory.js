// Exemplo Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const pessoa1 = new Pessoa('João');
pessoa1.falar(); //-> Meu nome é João

// Exemplo Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('Tiago');
pessoa2.falar(); //-> Meu nome é Tiago