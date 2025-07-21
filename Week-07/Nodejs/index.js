const express= require('express');
const feedRoutes= require('./routes/feed');
const app = express();
const PORT=8080;

app.use(express.json());
app.use((req,res, next)=>{
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT');
 res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
})

app.use('/feed',feedRoutes);



app.listen(PORT,()=>{
console.log(`server is running on port number ${PORT}`);
})