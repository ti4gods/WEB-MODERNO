// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
function avaliaPontuacoes (stringPontuacoes) {
    const listaDePontuacoes = stringPontuacoes.split(", ").map(Number);
    
    let qtdQuebraDeRecords = 0
    let piorJogo = 0
    let maiorPontuacao = listaDePontuacoes[0]
    let menorPontuacao = listaDePontuacoes[0]

    for (let indice = 1; indice < listaDePontuacoes.length; indice++) {
        if (listaDePontuacoes[indice] > maiorPontuacao) {
            maiorPontuacao = listaDePontuacoes[indice]
            qtdQuebraDeRecords++
        } else if (listaDePontuacoes[indice] < menorPontuacao) {
            menorPontuacao = listaDePontuacoes[indice]
            piorJogo = indice + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))

const resultado = avaliaPontuacoes(stringPontuacoes);

console.log("Número de vezes que bateu recorde: " + resultado[0]);
console.log("Pior jogo: " + resultado[1]);