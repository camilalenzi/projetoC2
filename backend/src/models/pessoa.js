const mongoose = require('mongoose');

const pessoaSchema = mongoose.Schema({
    nome: {
        type: mongoose.Schema.Types.String,
       required: true
    },
    cpf: {
        type: mongoose.Schema.Types.String,
       required: true
    },
    data_nascimento: {
        type: mongoose.Schema.Types.Date,
       required: true
    },
    telefone: {
        type: mongoose.Schema.Types.String,
       required: true
    },
    grupo_prioritario: {
        type: mongoose.Schema.Types.Boolean,
       required: true
    },
    endereco: {
        type: mongoose.Schema.Types.String,
       required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    idade: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    Agendamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'agendamento',
        //required: true
    },
    Unidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unidade',
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

module.exports = mongoose.model('pessoa', pessoaSchema);
