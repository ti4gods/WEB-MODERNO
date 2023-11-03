const moduloA = require('../../moduloA');

console.log(moduloA.ola)

const importandoAPasta = require('./pastaC');
console.log(importandoAPasta);


const http = require('http');

http.createServer((requisicao, resposta) => {
    resposta.write('Bom dia!')
    resposta.end() 
}).listen(8080);