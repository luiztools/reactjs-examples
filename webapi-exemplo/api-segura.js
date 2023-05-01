//api-segura.js
const http = require('http');
const express = require('express');
const app = express();

app.use(require("cors")());
app.use(express.json());

app.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (token === "123") {
        res.locals.token = token;
        return next();
    }
    res.status(401).json('Unauthorized');
})

app.get('/', (req, res, next) => {
    res.json({ message: "Tudo ok por aqui!", dados: cadastros });
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
    res.json({ message: "Cadastro recebido!", dados: cadastros });
})

const server = http.createServer(app);
server.listen(process.env.PORT || 3001);
console.log(`Servidor escutando na porta ${process.env.PORT || 3001}...`)