const { DataTypes } = require("sequelize");
const dbconn = require("../configDB/postgress-connection");

const Pessoa = dbconn.define("pessoa", {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  pessoa_nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  cpf_pessoa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  data_nascimento: {
    type: DataTypes.STRING,
    allowNull: false
  },

  telefone_pessoa: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  grupo_prioritario: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  endereco_pessoa: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email_pessoa: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Pessoa