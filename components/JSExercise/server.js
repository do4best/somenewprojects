const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) res.writeHead(500);
        else res.end(data);
    });
}).listen(3000, () => console.log('Server running at http://localhost:3000'));
