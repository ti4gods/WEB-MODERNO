const sistemaDeArquivos = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

sistemaDeArquivos.writeFile(__dirname + 'arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo!')
});
