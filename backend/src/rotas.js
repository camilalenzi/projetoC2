const express = require('express');
const rotas = express.Router();
const agendamento = require('./controllers/agendamento_controller')
const pessoa = require('./controllers/pessoa_controller')
const unidade = require('./controllers/unidade_controller')

//Rotas de Agendamento
rotas.post('/agendamento/Cadastrar', agendamento.Cadastrar);
rotas.get('/agendamento/Listar', agendamento.Listar);
rotas.get('/agendamento/Listar/:id', agendamento.ListarUm);
rotas.delete('/agendamento/Deletar/:id', agendamento.Deletar);
rotas.put('/agendamento/Atualizar/:id', agendamento.Atualizar);

//Rotas de Pessoa
rotas.post('/pessoa/Cadastrar', pessoa.Cadastrar);
rotas.get('/pessoa/Listar', pessoa.Listar);
rotas.get('/pessoa/Listar/:id', pessoa.ListarUm);
rotas.delete('/pessoa/Deletar/:id', pessoa.Deletar);
rotas.put('/pessoa/Atualizar/:id', pessoa.Atualizar);

//Rotas de Unidade
rotas.post('/unidade/Cadastrar', unidade.Cadastrar);
rotas.get('/unidade/Listar', unidade.Listar);
rotas.get('/unidade/Listar/:id', unidade.ListarUm);
rotas.delete('/unidade/Deletar/:id', unidade.Deletar);
rotas.put('/unidade/Atualizar/:id', unidade.Atualizar);

module.exports = rotas;