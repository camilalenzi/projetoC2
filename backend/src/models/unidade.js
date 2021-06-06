const mongoose = require('mongoose');

const unidadeSchema = mongoose.Schema({
    nome_unidade: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    descricao_unidade: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    endereco_unidade: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    telefone_unidade: {
    type: mongoose.Schema.Types.String,
    required: true
    },
    email_unidade: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    latlong_unidade: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    Pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pessoa',
      //  required: true
    },
    Agendamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'agendamento',
       // required: true

    },
    data_criacao: {
    type: mongoose.Schema.Types.Date,
    default: Date.now
    },
    data_alteracao: {
    type: mongoose.Schema.Types.Date,
    default: null
    }
});

module.exports = mongoose.model('unidade', unidadeSchema);
