const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const  MealProducts= sequelize.define('meals-products',{
  
    id:{
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey:true
  },
     m_id:{
     type: DataTypes.INTEGER,
  },
      p_id:{
     type: DataTypes.INTEGER,
  },
  quantity:DataTypes.INTEGER
 
});

module.exports= MealProducts;