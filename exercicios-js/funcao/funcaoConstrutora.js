function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro;

uno.acelerar(); //5 km/h
uno.acelerar(); //10 km/h

console.log(`Velocidade do Uno: ${uno.getVelocidadeAtual()}`);

const ferrari = new Carro(350, 20);

ferrari.acelerar(); //20
ferrari.acelerar(); //40
ferrari.acelerar(); //60

console.log(`Velocidade da Ferrari: ${ferrari.getVelocidadeAtual()}`);