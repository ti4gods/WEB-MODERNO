// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`);
//     }
// }

// const pessoa1 = new Pessoa('João');
// pessoa1.falar(); //-> Meu nome é João

function Pessoa(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João');
pessoa1.falar();