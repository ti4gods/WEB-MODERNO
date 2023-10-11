function calcularArea(largura, altura) {
    const area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        return area;
    }
}

console.log(calcularArea(2, 2));
console.log(calcularArea(2)); //NaN
console.log(calcularArea())
console.log(calcularArea(2, 3, 11, 15, 33));
console.log(calcularArea(10, 5));