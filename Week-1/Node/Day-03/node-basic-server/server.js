require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT =  3000;


function logRequest(req) {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
  fs.appendFileSync(path.join(__dirname, 'logs', 'request.log'), log);
  console.log(log.trim());
}


const routes = {
  '/': require('./routes/home'),
  '/about': require('./routes/about'),
  '/contact': require('./routes/contact')
};

const server = http.createServer((req, res) => {
  logRequest(req);

  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

process.on('SIGINT', () => {
  console.log('\nGracefully shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
