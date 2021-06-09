const { DataTypes } = require("sequelize");
const dbconn = require("../configDB/postgress-connection");

const atendimento = dbconn.define("atendimento", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  pessoaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pessoas",
      key: "id",
    }
  },
  unidadeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "unidadeSaudes",
      key: "id",
    }
  },

  data_hora_agendamento: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
  },

  necessidades_especiais: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  observacoes_agendamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = atendimento;