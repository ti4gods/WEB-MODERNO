const porta = 3003;

const express = require('express');
const aplicativo = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

// .user vai passar por todas as requisições 
// Se os dados enviados na req. estiverem no formado urlencoded será feito o parser
aplicativo.use(bodyParser.urlencoded({
    extended: true 
}))

// Demonstrando a função middleware
// aplicativo.get('/produtos', (requisicao, resposta, proximo) => {
//     console.log('Middleware 1...');
//     proximo();
// })

// Demonstração de função middleware que pode ser utilizada para executar independente do verbo/método http.
// aplicativo.use((requisicao, resposta, proximo) => {
//     resposta.send({ nome: 'Notebook', preco: 123.45 })
// });

// aplicativo.get('/produtos', (requisicao, resposta, proximo) => {
//     resposta.send({ nome: 'Notebook', preco: 123.45 })
// });

aplicativo.get('/produtos', (requisicao, resposta, proximo) => {
    resposta.send(bancoDeDados.getProdutos());
});

aplicativo.get('/produtos/:id', (requisicao, resposta, proximo) => {
    resposta.send(bancoDeDados.getProduto(requisicao.params.id));
});

aplicativo.post('/produtos', (requisicao, resposta, proximo) => {
    const produto = bancoDeDados.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })

    // Após realizar o POST retorna o conteúdo do produto persistido
    resposta.send(produto);
})

aplicativo.put('/produtos/:id', (requisicao, resposta, proximo) => {
    const produto = bancoDeDados.salvarProduto({
        id: requisicao.params.id,
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })

    // Após realizar o POST retorna o conteúdo do produto persistido
    resposta.send(produto);
})

aplicativo.delete('/produtos/:id', (requisicao, resposta, proximo) => {
    const produto = bancoDeDados.excluirProduto(requisicao.params.id)

    // Após realizar o POST retorna o conteúdo do produto persistido
    resposta.send(produto);
})

aplicativo.listen(porta, () => {
    console.log(`O servidor executando na porta ${porta}.`)
});