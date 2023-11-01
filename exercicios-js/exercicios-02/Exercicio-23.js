// Desenvolva uma função que receba como parâmetro um número de 1 a 10.  
// Internamente, na função, será gerado um número aleatório de 1 a 10. 
// A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. 
// Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o Х". 
// Se não for igual, retorne "Que pena! O número sorteado foi o Х". Х é o número que foi sorteado.

function funcaoDaSorte(numeroEscolhido) {
    const numeroMinimo = 1;
    const numeroMaximo = 10;
    const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + numeroMinimo;

    return (numeroEscolhido === numeroSorteado 
        ? `Parabéns! O número sorteado foi o ${numeroSorteado}` 
        : `Que pena, o número sorteado foi o ${numeroSorteado}`
    )
}

console.log(funcaoDaSorte(10)) // "Parabéns! O número sorteado foi o 10" 
console.log(funcaoDaSorte(5))  // "Que pena! O número sorteado foi o 1" 
console.log(funcaoDaSorte(5))  // "Que pena! O número sorteado foi o 9"