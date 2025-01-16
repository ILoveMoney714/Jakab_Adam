// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

// Start the server
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
/* function(__dirname, __filename, module, require, exports)
console.log(__dirname);
console.log(__filename);
const add = require("/calculator.js);
*/