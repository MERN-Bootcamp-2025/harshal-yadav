const express= require('express');
const adminRoute= require('./routes/admin');
const shopRoute= require('./routes/shop');
const Path=require('path');


const app=express();
const Port=3000;


app.use(adminRoute);
// app.use(shopRoute);
app.use("/shop",shopRoute);


app.use((req,res,next)=>{
    console.log("Hello MindBowser!!");
    next();
})

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page not found </h1>')
//     next();
// })

// app.use(['/about', '/contact', '/profile'], (req, res, next) => {
//   console.log("This middleware runs for /about, /contact, and /profile");
//   res.send('<h1>Hello</h1>')
//   next();
// });

// app.use('/product-add',(req,res,next)=>{
//     console.log("Body", req.body);
//     res.send('<form action="/product" method="POST"><input type="text" name="title"/><button>Submit</button>');
// })


// app.use('/product',(req,res,next)=>{
//     console.log("Body", req.body);
//     res.redirect('/');
// })
// app.get('/', (req, res) => {
//     res.send('Welcome to MD!');
// });

// app.get('/home', (req, res) => {
//     res.send('<h1>Hello MD people!</h1>');
// });


app.listen(Port,()=>{
    console.log(`server is running on port number: ${Port}`);
})