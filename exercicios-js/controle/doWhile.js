//Diferente do While, ao menos 1x é executada.
function getGerarInteiroAleatorioEntre(valorMinimo, valorMaximo) {
    const valor = Math.random() * (valorMaximo - valorMinimo) + valorMinimo;
    return Math.floor(valor);
}

let opcao;
const valorParada = -1;

do {
    opcao = getGerarInteiroAleatorioEntre(-1, 10);    
    console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != valorParada)

console.log('Até a próxima!')

