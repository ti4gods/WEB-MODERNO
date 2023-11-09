const sistemaDeArquivos = require('fs');

const caminho = __dirname + '/arquivo.json';

// Sincrono
const conteudo1 = sistemaDeArquivos.readFileSync(caminho, 'utf-8');
console.log(conteudo1);

// Assincrono
sistemaDeArquivos.readFile(caminho, 'utf-8', (erro, conteudoArquivo) => {
    const configuracao = JSON.parse(conteudoArquivo);
    console.log(`${configuracao.db.host}:${configuracao.db.port}`)
})

const configuracao = require('./arquivo.json');
console.log(configuracao.db);

// Leitura de uma pasta --> __dirname representa o diretório atual.
sistemaDeArquivos.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta....');
    console.log(arquivos);
})
