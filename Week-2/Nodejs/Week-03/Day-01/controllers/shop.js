const Product = require('../models/product');



exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};


exports.getProduct = (req, res, next) => {

    const prodId= req.params.productId;
    console.log("ProdId",prodId);
    Product.findById(prodId, product=>{
        console.log(product);
    })
     res.redirect('/');
};


exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};


exports.getCart = (req, res, next) => {

    res.render('shop/cart', {
      pageTitle: 'Your Cart',
      path: '/cart',
    });

};


exports.getCheckout = (req, res, next) => {

    res.render('shop/checkout', {
      pageTitle: 'Checkout',
      path: '/checkout',
    });

};