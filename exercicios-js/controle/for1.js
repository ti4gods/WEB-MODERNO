let contador = 1;
const valorLimite = 10;

while (contador <= valorLimite) {
    console.log(`Contador = ${contador}`)
    contador++;
}

for (let indice = 1; indice <= valorLimite; indice++) {
    console.log(`Indice = ${indice}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(`Posição ${indice} - Valor: ${notas[indice]}`)
}