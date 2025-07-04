const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');
const Product = require('./models/product');
const Meals = require('./models/meals');
const MealProduct = require('./models/meal-products');
const Order = require('./models/order');


const app = express();
const Port=3000;
app.set('view engine', 'ejs');
app.set('views', 'views');


// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

if (process.env.SEED_DB === 'true') {
  require('./scripts/seedMeals')().then(() => {
    console.log("Seeding done.");
  });
}



sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    // return User.findById(1);
    // console.log(result);
  })
  // .then(user => {
  //   if (!user) {
  //     return User.create({ name: 'Max', email: 'test@test.com' });
  //   }
  //   return user;
  // })
  // .then(user => {
  //   // console.log(user);
  //   return user.createCart();
  // })
  .then(cart => {
    app.listen(Port,()=>{
      console.log(`server is running on prot no ${Port}`)
    });
  })
  .catch(err => {
    console.log(err);
  });
