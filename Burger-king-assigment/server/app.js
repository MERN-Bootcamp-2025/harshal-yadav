const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');

const sequelize = require('./util/database');
const Product = require('./models/product');
const Meals = require('./models/meals');
const MealProduct = require('./models/meal-products');
const Order = require('./models/order');
const mealRoutes = require('./routes/meals');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
const Port=3000;

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoutes); 


app.use(mealRoutes);


sequelize
  .sync({ alter: true }) 
  .then(() => {
    app.listen(Port, () => {
      console.log(`server is running on port ${Port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });

