// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

// Opção 1) Utilizando o operador **
function calcularPotencia(base, expoente) {
  return base ** expoente;
}

console.log(calcularPotencia(2, 3)); 

// Opção 2) Utilizando a função Math.pow
function calcularPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

console.log(calcularPotencia(2, 3)); 

