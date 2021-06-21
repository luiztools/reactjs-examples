//api-cadastro.js
var http = require('http'); 
const express = require('express');
const app = express();

app.use(require("cors")());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
})

const cadastros = [];
app.post('/cadastro', (req, res, next) => { 
    console.log("Cadastro recebido!");
    //salva no banco de dados
    cadastros.push({
        nome: req.body.txtNome, 
        idade: parseInt(req.body.txtIdade), 
        uf: req.body.cmbUF
    });
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
}) 

var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")