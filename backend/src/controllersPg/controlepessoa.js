const Pessoa = require("../modeloPg/modelopessoa");
const agendamento = require("../modeloPg/modeloatendimento")


Pessoa.hasOne(agendamento, {
  foreignKey: "pessoaId",
  as: "pessoa"
})




async function Criar(req, res) {
  try {
    const cpf = req.body.cpf_pessoa;
    const pesquisa = await Pessoa.findOne({ where: { cpf_pessoa: cpf } });
    if (!pesquisa) {
      const resp = await Pessoa.create({
        pessoa_nome: req.body.pessoa_nome,
        cpf_pessoa: cpf,
        data_nascimento: req.body.data_nascimento,
        telefone_pessoa: req.body.telefone_pessoa,
        grupo_prioritario: req.body.grupo_prioritario,
        endereco_pessoa: req.body.endereco_pessoa,
        email_pessoa: req.body.email_pessoa,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Já cadastrada" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao cadastrar",
    });
  }
}

async function ListarTodos(req, res) {
  try {
    const resp = await Pessoa.findAll();
    if (!resp) {
      res.status(400).json({ message: "Não foi possível listar " });
    }
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function ListarUm(req, res) {
  try {
    const cpf = req.params.cpf;
    const resp = await Pessoa.findOne({
      where: {
        cpf_pessoa: cpf,
      },
    });
    if (!resp) {
      res.status(400).json({ message: "Não foi possível encontrar este CPF." });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um Erro" });
  }
}

async function Atualizar(req, res) {
  try {
    const cpf = req.params.cpf;
    const resp = await Pessoa.update(
      {
        pessoa_nome: req.body.nome_pessoa,
        data_nascimento: req.body.data_nascimento,
        telefone_pessoa: req.body.telefone_pessoa,
        grupo_prioritario: req.body.grupo_prioritario,
        endereco_pessoa: req.body.endereco_pessoa,
        email_pessoa: req.body.email_pessoa,
      },
      {
        where: {
          cpf_pessoa: cpf,
        },
      }
    );
    if (resp == false) {
      res.status(400).json({ message: "Não foi possível atualizar os dados" });
    } else {
      res.status(200).json({ message: "Atualização realizada com sucesso!" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Houve um erro no sistema!" });
  }
}

async function Excluir(req, res) {
  try {
    const cpf = req.params.cpf;

    const resp = await Pessoa.destroy({
      where: {
        cpf_pessoa: cpf,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Erro ao excluir registro" });
    }
    res.status(200).json({ message: "Excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Não foi possível excluir pessoa!" });
  }
}

module.exports = {
  Criar,
  ListarTodos,
  ListarUm,
  Atualizar,
  Excluir,
};