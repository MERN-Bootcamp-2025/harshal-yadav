// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;


const mongodb= require('mongodb');
const MongoClient= mongodb.MongoClient;

const mongoConnect=(cb)=>{
  let _db;
  MongoClient.connect(
    'mongodb+srv://harshalyadav:r5HFz3Q8JM336wek@learning.5gn8wxw.mongodb.net/?retryWrites=true&w=majority&appName=Learning'
  ).then(client=>{
     _db=client.db();
    console.log('Connected');
    cb();
  })
  .catch(err=>{
    console.log(err);
  })
}

const getDB=()=>{
  if(_db){
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect=mongoConnect;
exports.getDB= getDB;