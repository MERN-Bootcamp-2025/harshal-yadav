// eventLoopPhases.js
// const fs = require("fs");

// console.log(" Start - Synchronous");

// process.nextTick(() => console.log(" process.nextTick"));

// Promise.resolve().then(() => console.log(" Promise.resolve"));

// setTimeout(() => console.log("setTimeout"), 0);

// setImmediate(() => console.log("setImmediate"));

// fs.readFile(__filename, () => {
//   console.log(" fs.readFile callback");
// });

// console.log("End - Synchronous");

//*************************************2nd excise********************************************************************** */

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const { pathname, query } = parsedUrl;
//   let body = "";

//   req.on("data", chunk => body += chunk);
//   req.on("end", () => {
//     res.setHeader("Content-Type", "application/json");
    
//     if (pathname === "/resource") {
//       switch (req.method) {
//         case "GET":
//           return res.end(JSON.stringify({ method: "GET", query }));
//         case "POST":
//           return res.end(JSON.stringify({ method: "POST", body: JSON.parse(body || "{}") }));
//         case "PUT":
//           return res.end(JSON.stringify({ method: "PUT", body: JSON.parse(body || "{}") }));
//         case "DELETE":
//           return res.end(JSON.stringify({ method: "DELETE" }));
//         default:
//           res.statusCode = 405;
//           return res.end(JSON.stringify({ error: "Method Not Allowed" }));
//       }
//     } else {
//       res.statusCode = 404;
//       res.end(JSON.stringify({ error: "Not Found" }));
//     }
//   });
// });

// server.listen(3000, () => console.log("Server running on 3000"));


//^^^^^^^^^^^^^^^^^^^^^^^^^^Exercise 4^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// const http = require("http");
// const multiparty = require("multiparty");

// const server = http.createServer((req, res) => {
//   if (req.url === "/upload" && req.method === "POST") {
//     const form = new multiparty.Form();
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         res.writeHead(500);
//         return res.end("Upload Error");
//       }
//       res.writeHead(200, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify({ fields, files }));
//     });
//   } else if (req.url.startsWith("/user/")) {
//     const userId = req.url.split("/")[2];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify({ userId }));
//   } else {
//     res.writeHead(404);
//     res.end("Route Not Found");
//   }
// });

// server.listen(3000, () => console.log("server on 3002 "));






