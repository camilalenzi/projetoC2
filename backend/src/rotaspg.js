const Route = require("express").Router();
const Pessoa = require("./controllersPg/controlepessoa");
const UniSaude = require("./controllersPg/controleunidade");
const Atendimento = require("./controllersPg/controleatendimento")

Route.post("/Registrarpessoa", Pessoa.Criar);
Route.get("/Listarpessoas", Pessoa.ListarTodos);
Route.get("/ListarUmapessoa/:cpf", Pessoa.ListarUm);
Route.put("/AtualizarPessoa/:cpf", Pessoa.Atualizar);
Route.delete("/RemoverPessoa/:cpf", Pessoa.Excluir);


Route.post("/RegistrarUnidade", UniSaude.Registrar);
Route.get("/ListarUnidades", UniSaude.ListarTodos);
Route.get("/ListarUmaUnidade/:id", UniSaude.ListarUm);
Route.put("/AtualizarUnidade/:id", UniSaude.Atualizar);
Route.delete("/RemoverUnidade/:id", UniSaude.Excluir);


Route.post("/RegistrarAtendimento/:pessoaid/:unidadeid", Atendimento.Criar);
Route.get("/ListarAtendimentos", Atendimento.ListarTodos);
Route.get("/ListarUmAtendimento/:id", Atendimento.ListarUm);
Route.put("/AtualizarAtendimento/:id", Atendimento.Atualizar);
Route.delete("/RemoverAtendimento/:id", Atendimento.Excluir);


module.exports = Route