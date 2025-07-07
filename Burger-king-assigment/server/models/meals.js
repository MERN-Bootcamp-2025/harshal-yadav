const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const  Meals= sequelize.define('meals',{
  
    id:{
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey:true
  },
  m_name:DataTypes.STRING,
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
  },
    category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  products: {
  type: DataTypes.TEXT,
  get() {
    return JSON.parse(this.getDataValue('products') || '[]');
  },
  set(val) {
    this.setDataValue('products', JSON.stringify(val));
  }
}
});

module.exports= Meals;