const http= require('http');

const server= http.createServer((req,res)=>{
    req.readableEnded("Node Js");
})