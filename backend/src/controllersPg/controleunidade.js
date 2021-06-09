const UnidSaude = require("../modeloPg/modelounidade");
const agendamento = require("../modeloPg/modeloatendimento")
UnidSaude.hasOne(agendamento, {
  foreignKey: "unidadeId",
  as: "unidade"
})

async function Registrar(req, res) {
  try {
    const nome = req.body.nome_unidade;
    const pesquisa = await UnidSaude.findOne({ where: { nome_unidade: nome } });
    if (!pesquisa) {
      const resp = await UnidSaude.create({
        nome_unidade: nome,
        descricao_unidade: req.body.descricao_unidade,
        endereco_unidade: req.body.endereco_unidade,
        telefone_unidade: req.body.telefone_unidade,
        email_unidade: req.body.email_unidade,
        latlong_unidade: req.body.latlong_unidade,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Está unidade já está cadastrada" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao Cadastrar",
    });
  }
}

async function ListarTodos(req, res) {
  try {
    const resp = await UnidSaude.findAll();
    if (!resp) {
      res.status(400).json(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro no sistema" });
  }
}

async function ListarUm(req, res) {
  try {
    const id = req.params.id;
    const resp = await UnidSaude.findOne({
      where: {
        id: id,
      },
    });
    if (!resp) {
      res
        .status(400)
        .json({ message: "Unidade não encontrada!" });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro no sistema!" });
  }
}

async function Atualizar(req, res) {
  try {
    const id = req.params.id;
    const resp = await UnidSaude.update(
      {
        nome_unidade: req.body.nome_unidade,
        descricao_unidade: req.body.descricao_unidade,
        endereco_unidade: req.body.endereco_unidade,
        telefone_unidade: req.body.telefone_unidade,
        email_unidade: req.body.email_unidade,
        latlong_unidade: req.body.latlong_unidade,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (resp == false) {
      res
        .status(400)
        .json({ message: "Não foi possível atualizar os dados da Unidade" });
    } else {
      res.status(200).json({ message: "Unidade atualizada com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro no sistema" });
  }
}

async function Excluir(req, res) {
  try {
    const id = req.params.id;

    const resp = await UnidSaude.destroy({
      where: {
        id: id,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Não foi possível excluir unidade" });
    }
    res.status(200).json({ message: "Excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro no sistema!" });
  }
}

module.exports = {
  Registrar,
  ListarTodos,
  ListarUm,
  Atualizar,
  Excluir,
};