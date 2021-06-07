const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  // process.env.POSTGRES_DB,
  //  process.env.POSTGRES_USER,
  //  process.env.POSTGRES_PASSWORD,
  'postgressDB', 'root', 'faesa123',
  {
    dialect: "postgres",
    host: '0.0.0.0',
    port: '5432',
  }
);

(async () => {
  try {
    const resultado = await sequelize.sync();
    console.log("banco Postgres conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
})();
console.log(process.env.POSTGRES_USER)
module.exports = sequelize;