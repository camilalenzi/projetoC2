const teste = require("../")
console.log(teste)
require("dotenv").config({
    path:
        process.env.NODE_ENV === "development"
            ? "../backend/.env.development"
            : ".env",
});
console.log(process.env.NODE_ENV)

const express = require('express');
const app = express();
const rotas = require('./rotas')
const port = 3000;
const hostname = 'localhost';
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


app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: https://${hostname}:${port}`);
})
