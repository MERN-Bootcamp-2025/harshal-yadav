const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb1223', 'postgres', 'newpassword123', {
  host: 'localhost',
  dialect:  'postgres',
});
module.exports = sequelize;

// console.log("sequelize",sequelize);