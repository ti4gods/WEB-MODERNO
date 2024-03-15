// Importando o módulo Express, que é um framework web para Node.js
const express = require('express')

// Inicializando o aplicativo Express
const app = express()

// Importando o módulo body-parser, que é um middleware para lidar com dados enviados no corpo das solicitações HTTP
const bodyParser = require('body-parser')

// Configurando o body-parser para analisar os corpos das solicitações com dados codificados em URL
app.use(bodyParser.urlencoded({ extended: true }))

// Definindo uma rota POST em '/usuarios'. Esta rota será acionada quando o método POST for chamado no endpoint '/usuarios'
app.post('/usuarios', (req, resp) => {
    // Exibindo no console os dados enviados no corpo da solicitação
    console.log(req.body)

    // Enviando uma resposta HTTP com a mensagem 'Parabéns!' para o cliente
    resp.send('<h1>Parabéns, usuário incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário alterado!</h1>')
})

// Configurando o servidor Express para ouvir na porta 3003
app.listen(3003)
