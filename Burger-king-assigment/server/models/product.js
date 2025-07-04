const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const  Product= sequelize.define('product',{
  id:{
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey:true
  },
  p_name:DataTypes.STRING,
  isVeg:{
       type: DataTypes.BOOLEAN,
       defaultValue:true,
  },
  title:DataTypes.STRING,
  price:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imageUrl:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports= Product;
