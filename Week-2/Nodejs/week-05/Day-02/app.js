const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;

const mongoose = require('mongoose');
const User= require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('686fbd1308c3498e19820d60')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000,()=>{
//     console.log("Server is running on port no 3000 ");
//   });
// });

mongoose
  .connect(
    'mongodb+srv://harshalyadav:r5HFz3Q8JM336wek@learning.5gn8wxw.mongodb.net/?retryWrites=true&w=majority&appName=Learning')
  .then(result => {
    User.findOne().then(user=>{
      if(!user){
     const user= new User({
            name: 'Max',
            email:'max@test.com',
            cart:{
               items:[]
            }
    });
    user.save();
      }
    })
    
    app.listen(3000, ()=>{
      console.log("Server is running on port no 3000");
    });
  })
  .catch(err => {
    console.log(err);
  });
