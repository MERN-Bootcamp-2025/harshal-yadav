const Product = require('../models/product');



exports.getProducts = (req, res, next) => {
 Product.findAll()
  .then(products => {
    res.status(200).json({ products });
  })
  .catch(err => {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  });

};



exports.getProduct = (req, res, next) => {

  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then(product => {
      console.log(product);
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
    })
    .catch(err => {
      console.error("Error loading index:", err);
      res.status(500).send("Internal Server Error");
    });
};



// exports.getCart = (req, res, next) => {

//     res.render('shop/cart', {
//       pageTitle: 'Your Cart',
//       path: '/cart',
//     });

// };


// exports.getCheckout = (req, res, next) => {

//     res.render('shop/checkout', {
//       pageTitle: 'Checkout',
//       path: '/checkout',
//     });

// };