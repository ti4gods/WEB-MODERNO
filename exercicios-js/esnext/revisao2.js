// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3)); //5

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})

lexico1(); // true
lexico2(); // true

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log(); // Node

// Operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(1, 2 ,3)) // 6
