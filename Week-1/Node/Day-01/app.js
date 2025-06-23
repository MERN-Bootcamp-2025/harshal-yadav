// app.js
const fs = require('fs');
const path = require('path');
const os = require('os');
const { add, capitalizeName } = require('./utils');

// Display personal information
console.log("👤 My First Node.js App by Harshal Yadav");

// Console logs with different data types
console.log("String Data:", "Hello from Node.js");
console.log("Number Data:", 2025);
console.log("Object Data:", { name: "Harshal", age: 22 });

// Simple data processing
const result = add(10, 15);
console.log("✅ Simple Calculation: 10 + 15 =", result);

// Writing to a file
const filePath = path.join(__dirname, 'info.txt');
fs.writeFileSync(filePath, `User: ${capitalizeName("harshal")}\nSum: ${result}\n`, 'utf8');
console.log("📁 File written successfully!");

// Reading file content
const content = fs.readFileSync(filePath, 'utf8');
console.log("📖 File Content:\n", content);

// Using OS module
console.log("🧠 System Info:");
console.log("User:", os.userInfo().username);
console.log("Platform:", os.platform());
console.log("Uptime (s):", os.uptime());

// Command line argument
console.log("📥 CLI Argument:", process.argv[2] || "No argument passed");

// Environment variable (set like: NODE_ENV=dev node app.js)
console.log("🌍 Environment:", process.env.NODE_ENV || "not set");
