let dobro = function (valor) {
    return 2 * valor
}

dobro = (valor) => {
    return 2 * valor
}

dobro = valor => 2 * valor; //return implicito
console.log(dobro(Math.PI));

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá';
console.log(ola())