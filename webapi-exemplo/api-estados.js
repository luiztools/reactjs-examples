//api-estados.js
var http = require('http'); 
const express = require('express');
const app = express();
app.use(require("cors")());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

app.get('/estados', (req, res, next) => { 
    console.log("Retornou todos estados!");
    const ufs = [
        {id:1,uf:'RS'},{id:2,uf:'SC'},{id:3,uf:'PR'}// coloque os demais estados
    ]
    res.json(ufs);
}) 

var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor escutando na porta 3030...")