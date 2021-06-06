const unidade = require("../models/unidade");

async function Cadastrar(req,res){
    const Unidade = new unidade({
            nome_unidade: req.body.nome_unidade,
            descricao_unidade: req.body.descricao_unidade,
            endereco_unidade: req.body.endereco_unidade,
            telefone_unidade: req.body.telefone_unidade,
            email_unidade: req.body.email_unidade,
            latlong_unidade: req.body.latlong_unidade,
            Pessoa: req.body.Pessoa,
            Agendamento: req.body.Agendamento
              
    }).save().then(() => {
        res.status(200).send("Salvo com sucesso!")
    }).catch(()=> {
        res.status(400).send('Ocorreu um erro ao salvar!')
    })
}
async function Listar(req,res){
    await unidade.find((erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível listar os itens cadastrados!')
        }else{
            res.status(200).json({mensage})
        }
    }).populate('Unidade').populate('Unidade')
}
async function ListarUm(req,res){
    const id = req.params.id;
    await unidade.findOne({_id:id},(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível listar o item cadastrado!')
        }else{
            res.status(200).json({mensage})
        }
    }).populate('Unidade').populate('Unidade')
    
}
async function Deletar(req,res){
    const id = req.params.id;
    await unidade.findOneAndDelete({_id:id},(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível deletar o item cadastrado!')
        }else{
            res.status(200).json({mensage})
        }
    })
    
}
async function Atualizar(req,res){
    const option = {new:true}
    const id = req.params.id
    const valor = {
        $set:{
            nome_unidade: req.body.nome_unidade,
            descricao_unidade: req.body.descricao_unidade,
            endereco_unidade: req.body.endereco_unidade,
            telefone_unidade: req.body.telefone_unidade,
            email_unidade: req.body.email_unidade,
            latlong_unidade: req.body.latlong_unidade,
            Pessoa: req.body.Pessoa,
            Agendamento: req.body.Agendamento,
            data_alteracao: Date.now()
        }
    }
    console.log(id,valor)
    await unidade.findOneAndUpdate({_id:id},valor, option,(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível atualizar os itens cadastrados!')
        }else{
            res.status(200).json({mensage})
         
        }
    })
}
module.exports = {Cadastrar, Listar, ListarUm, Deletar, Atualizar}