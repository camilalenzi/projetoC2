const atendimento = require("../modeloPg/modeloatendimento");
const Pessoa = require("../modeloPg/modelopessoa");
const Unidade = require("../modeloPg/modelounidade");

atendimento.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
  as: "pessoas",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

atendimento.belongsTo(Unidade, {
  foreignKey: "unidadeId",
  as: "unidade",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
});

async function Criar(req, res) {
  try {
    const pessoaid = req.params.pessoaid;
    const unidadeId = req.params.unidadeid;
    const dt = req.body.data_hora_agendamento;
    const findpessoa = await Pessoa.findByPk(pessoaid);
    const findunidade = await Unidade.findByPk(unidadeId);

    const pesquisa = await atendimento.findOne({
      where: { data_hora_agendamento: dt },
    });
    if (!findunidade && !findpessoa) {
      res
        .status(400)
        .json({ message: "Dados não encontrados! " });
    }
    if (!findunidade) {
      res.status(400).json({ message: "Unidade não existe! " });
    } else if (!findpessoa) {
      res.status(400).json({ message: "Cadastro de pessoa não existe! " });
    }

    if (!pesquisa) {
      const resp = await atendimento.create({
        pessoaId: pessoaid,
        unidadeId: unidadeId,
        data_hora_agendamento: dt,
        necessidades_especiais: req.body.necessidades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "A data já foi preenchida " });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ocorreu um Erro ao Cadastrar",
    });
  }
}

async function ListarTodos(req, res) {
  try {
    const resp = await atendimento.findAll({
      include: [
        {
          association: "pessoas",
        },
        {
          association: "unidade",
        },
      ],
    });
    if (!resp) {
      res.status(400).json({ message: "Não foi possível listar! " });
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro no sistema!" });
  }
}

async function ListarUm(req, res) {
  try {
    const id = req.params.id;
    const resp = await atendimento.findOne({
      where: {
        id: id,
      },
    });
    if (!resp) {
      res.status(400).json({
        message: `Erro ao encontar atendimento  pela data ${new Date(
          dt
        ).toLocaleString("pt-Br")}`,
      });
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
    const resp = await atendimento.update(
      {
        data_hora_agendamento: req.body.data_hora_agendamento,
        necessidades_especiais: req.body.necessidades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (resp == false) {
      res.status(400).json({ message: "Não foi possível atualizar o atendimento" });
    } else {
      res.status(200).json({ message: "Dados Atualizados com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro no sistema!" });
    console.log(error);
  }
}

async function Excluir(req, res) {
  try {
    const id = req.params.id;

    const resp = await atendimento.destroy({
      where: {
        id: id,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Não foi possível excluir atendimento" });
      console.log(resp)
    } else {
      res.status(200).json({ message: "Excluído com sucesso" });
    }

  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir atendimento" });
    console.log(error);
  }
}

module.exports = {
  Criar,
  ListarTodos,
  ListarUm,
  Atualizar,
  Excluir,
};