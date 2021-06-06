const agendamento = require("../models/agendamento");
const unidade = require("../models/unidade");
const pessoa = require("../models/pessoa");

async function Cadastrar(req,res){
    const acharUnidade = await unidade.findById({_id:req.body.Unidade})
    const acharPessoa = await pessoa.findById({_id:req.body.Pessoa})

    const Agendamento = new agendamento({
        data_hora_agendamento: req.body.data_hora_agendamento,
        necessidade_especiais: req.body.necessidade_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
        Pessoa: req.body.Pessoa,
        Unidade:req.body.Unidade
                      
    }).save().then(() => {
        res.status(200).send("Salvo com sucesso!")
    }).catch(()=> {
        res.status(400).send('Ocorreu um erro ao salvar!')
    })
}
async function Listar(req,res){
    await agendamento.find((erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível listar os itens cadastrados!')
        }else{
            res.status(200).json({mensage})
        }
    }).populate('Pessoa').populate('Unidade')
}
async function ListarUm(req,res){
    const id = req.params.id;
    await agendamento.findOne({_id:id},(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível listar o item cadastrado!')
        }else{
            res.status(200).json({mensage})
        }
    }).populate('Pessoa').populate('Unidade')
    
}

async function Deletar(req,res){
    const id = req.params.id;
    await agendamento.findOneAndDelete({_id:id},(erro,mensage)=>{
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
        $set:{data_hora_agendamento: req.body.data_hora_agendamento,
            necessidade_especiais: req.body.necessidade_especiais,
            observacoes_agendamento: req.body.observacoes_agendamento,
            data_alteracao: Date.now()
        }
    }
    await agendamento.findOneAndUpdate({_id:id},valor, option,(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível atualizar os itens cadastrados!')
        }else{
            res.status(200).json({mensage})
        }
    })
}
module.exports = {Cadastrar, Listar, ListarUm, Deletar, Atualizar}