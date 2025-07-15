const path = require('path');

const express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;

const mongoose = require('mongoose');
const User= require('./models/user')

const app = express();
const MONGODB_URI= 'mongodb+srv://harshalyadav:r5HFz3Q8JM336wek@learning.5gn8wxw.mongodb.net/?retryWrites=true&w=majority&appName=Learning';

const store = new MongoDBStore({
  uri:MONGODB_URI,
  collection: 'sessions'
})

store.on('error', function(error) {
  console.log("Error",error);
});



app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000,()=>{
//     console.log("Server is running on port no 3000 ");
//   });
// });

app.use(session({
  secret: 'This is a secret',
  store: store,
  resave: false,
  saveUninitialized: false
}));


app.use((req, res, next) => {
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  next();
});

mongoose
  .connect(MONGODB_URI)
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
