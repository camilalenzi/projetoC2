require("dotenv").config({
    path: ".env"
});

const express = require('express');
const app = express();
const rotas = require('./rotas')
const port = 3001;
const hostname = "0.0.0.0";
const Db = require("./configDB/mongo-connection")
const postgress = require("./configDB/postgress-connection")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.json({
        status: "ok",
        message: "Servidor rodando "
    })
})

app.get('/', function (req, res) {
    res.send('Servidor funcionando corretamente')
})

app.use("/api", rotas)
app.use("/api", require("./rotaspg"))

app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: https://${hostname}:${port}`);
})
