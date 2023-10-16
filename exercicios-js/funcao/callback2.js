const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem utilizar callback
const notasBaixas1 = [];

for (let indice in notas) {
    if (notas[indice] < 7) {
        notasBaixas1.push(notas[indice]);
    }
}

console.log(notasBaixas1);

// Com uso do callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2);

// Arrow com uso do callback
const notasBaixas3 = notas.filter((nota) => nota < 7);

console.log(notasBaixas3);

// Deixando a função que é passada como parâmetro reutilizavel
const notasMenorQue7 = nota => nota < 7;
const notasBaixas4 = notas.filter(notasMenorQue7);
console.log(notasBaixas4);