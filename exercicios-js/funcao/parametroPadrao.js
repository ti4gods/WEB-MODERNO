function somar1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c;
}

//Quando passar 0 como parâmetro resolverá para falso, neste caso a lógica não funcionará
console.log(somar1(), somar1(3), somar1(1, 2, 3), somar1(0, 0, 0));

//Estratégia 2, 3 e 4 para gerar valor padrão
function somar2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

   return a + b + c;
}

console.log(somar2(), somar2(3), somar2(1, 2, 3), somar2(0, 0, 0));

// Aplicação de valor padrão do ES2015
function somar3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(somar3(), somar3(3), somar3(1, 2, 3), somar3(0, 0, 0));