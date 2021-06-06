const mongoose = require('mongoose');

const agendamentoSchema = mongoose.Schema({

    data_hora_agendamento: {
    type: mongoose.Schema.Types.Date,
    required:true
    },
    necessidade_especiais: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    observacoes_agendamento: {
        type: mongoose.Schema.Types.String,
        required: false
    },
    Pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pessoa',
        required: true
    },
    Unidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unidade',
        required: true
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

 module.exports = mongoose.model('agendamento', agendamentoSchema);

