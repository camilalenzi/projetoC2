const mongoose = require('mongoose');


if (process.env.NODE_ENV == "production") {
  mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustermongo.rnwr7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { authSource: "admin", useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
} else {
  mongoose.connect('mongodb://root:faesa123@localhost:27017/CampanhaVacina?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
db.once('open', function () {
  console.log("Banco de Dados Mongo conectado com sucesso");
});

module.exports = mongoose;