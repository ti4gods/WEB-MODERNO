function getGerarInteiroAleatorioEntre(valorMinimo, valorMaximo) {
    const valor = Math.random() * (valorMaximo - valorMinimo) + valorMinimo;
    return Math.floor(valor);
}

let opcao = 0;
const valorParada = -1;

while (opcao != valorParada) {
    opcao = getGerarInteiroAleatorioEntre(-1, 10);
    
    console.log(`Opção escolhida foi ${opcao}`);
}

console.log('Até a próxima!')