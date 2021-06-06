const pessoa = require("../models/pessoa");


async function Cadastrar(req,res){
    const Pessoa = new pessoa({
            nome: req.body.nome,
            cpf: req.body.cpf,
            data_nascimento: req.body.data_nascimento,
            telefone: req.body.telefone,
            grupo_prioritario: req.body.grupo_prioritario,
            endereco: req.body.endereco,
            email: req.body.email,
            Agendamento: req.body.Agendamento,
            Unidade: req.body.Unidade
                              
    }).save().then(() => {
        res.status(200).send("Salvo com sucesso!")
    }).catch(()=> {
        res.status(400).send('Ocorreu um erro ao salvar!')
    })
}
async function Listar(req,res){
    await pessoa.find((erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível listar os itens cadastrados!')
        }else{
            res.status(200).json({mensage})
        }
    }).populate('Agendamento').populate('Unidade')
}
async function ListarUm(req,res){
    const id = req.params.id;
    await pessoa.findOne({_id:id},(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível listar o item cadastrado!')
        }else{
            res.status(200).json({mensage})
        }
    }).populate('Agendamento').populate('Unidade')
    
}

async function Deletar(req,res){
    const id = req.params.id;
    await pessoa.findOneAndDelete({_id:id},(erro,mensage)=>{
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
            nome: req.body.nome,
            cpf: req.body.cpf,
            data_nascimento: req.body.data_nascimento,
            telefone: req.body.telefone,
            grupo_prioritario: req.body.grupo_prioritario,
            endereco: req.body.endereco,
            email: req.body.email,
            Agendamento: req.body.Agendamento,
            Unidade: req.body.Unidade,
            data_alteracao: Date.now()
        }
    }
    await pessoa.findOneAndUpdate({_id:id},valor, option,(erro,mensage)=>{
        if (erro){
            res.status(400).send('Não foi possível atualizar os itens cadastrados!')
        }else{
            res.status(200).json({mensage})
        }
    })
}
module.exports = {Cadastrar, Listar, ListarUm, Deletar, Atualizar}