const express =require('express');
const adminRoute= require('./routes/admin');

const app= express();
const Port=3000;

app.use(express.urlencoded({extended:false}));
// app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  next();
})


// app.use('/',(req,res,next)=>{
//     console.log("Home Page")
//     res.send("Home Page")
// });
app.use(adminRoute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found </h1>')
})

app.listen(Port,()=>{
    console.log(`Server is running on port Number ${Port}`);
})