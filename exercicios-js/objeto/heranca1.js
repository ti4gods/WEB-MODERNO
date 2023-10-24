const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324
}

const volvo = {
    modelo: 'V40',
    velocidadeMaxima: 200
}

console.log(ferrari.__proto__) //-> [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype) //-> true


