const http = require('http');

const server = http.createServer((req, res) => {
    // console.log("hello");
    res.write("hello");
    // res.end("End");
    console.log("Url", req.url);
      if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      console.log('POST data:', body);
      res.end('Received POST');
    });
 
   if(req.url==="/"){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Home</h1>')
    } else   if(req.url==="/about"){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>About</h1>')
    }else if(req.url==="/contact"){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Contact</h1>')
    }

  } else {
    res.end('Hello from GET or other method');
  }
});




server.listen(3010, () => {
    console.log("Server is running on 3000");
});


console.log("Phase One");


