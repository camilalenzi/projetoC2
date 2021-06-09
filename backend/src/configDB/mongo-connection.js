const mongoose = require('mongoose');

const strConnection =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clusterdb.rnwr7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(strConnection, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
db.once('open', function () {
  console.log("Banco de Dados Mongo conectado com sucesso");
});

module.exports = mongoose;