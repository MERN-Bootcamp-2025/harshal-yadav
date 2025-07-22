const express= require('express');
const feedRoutes= require('./routes/feed');
const app = express();
const mongoose = require('mongoose');
const multer  = require('multer')

let _db;


const PORT=8080;
const MONGODB_URI ='mongodb+srv://harshalyadav:r5HFz3Q8JM336wek@learning.5gn8wxw.mongodb.net/feed?retryWrites=true&w=majority&appName=Learning';
app.use(express.json());
app.use((req,res, next)=>{
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT');
 res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
})

app.use('/feed',feedRoutes);


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: { w: 'majority' }
})
  .then(result => {
   console.log("MongoDB connected successfully!!");
//    _db=result
  })
  .catch(err => {
    console.log(err);
  });
app.listen(PORT,()=>{
console.log(`server is running on port number ${PORT}`);
})