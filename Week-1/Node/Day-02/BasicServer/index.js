// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// Helper to serve HTML with headers
function sendResponse(res, statusCode, content, contentType = "text/html") {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(content);
}

// Create server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  console.log(`${req.method} ${pathname}`);

  // Static file handling
  if (pathname.startsWith("/public")) {
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath).slice(1);
    const contentTypeMap = {
      css: "text/css",
      png: "image/png",
      jpg: "image/jpeg",
    };

    fs.readFile(filePath, (err, data) => {
      if (err) {
        sendResponse(res, 404, "File not found");
      } else {
        sendResponse(res, 200, data, contentTypeMap[ext] || "application/octet-stream");
      }
    });
    return;
  }

  // Routing
  if (pathname === "/" && req.method === "GET") {
    const html = `
      <html>
        <head>
          <link rel="stylesheet" href="/public/styles.css" />
          <title>Home</title>
        </head>
        <body>
          <h1>Welcome to My Node Server</h1>
          <nav>
            <a href="/">Home</a> | 
            <a href="/about">About</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </body>
      </html>
    `;
    sendResponse(res, 200, html);
  } else if (pathname === "/about" && req.method === "GET") {
    const html = `
      <html>
        <head><title>About</title></head>
        <body>
          <h1>About Me</h1>
          <p>Hi, I'm Harshal Yadav. I'm learning backend with Node.js!</p>
        </body>
      </html>
    `;
    sendResponse(res, 200, html);
  } else if (pathname === "/contact" && req.method === "GET") {
    const html = `
      <html>
        <head><title>Contact</title></head>
        <body>
          <h1>Contact Me</h1>
          <p>Email: me@example.com</p>
        </body>
      </html>
    `;
    sendResponse(res, 200, html);
  } else {
    const html = `
      <html>
        <head><title>404</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
        </body>
      </html>
    `;
    sendResponse(res, 404, html);
  }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
