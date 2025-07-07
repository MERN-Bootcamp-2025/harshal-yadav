const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('burgerwebapp', 'postgres', 'newpassword123', {
  host: 'localhost',
  dialect:  'postgres',
  logging: console.log
});


module.exports = sequelize;