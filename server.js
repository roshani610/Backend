const http = require('http');
const dbOperations = require('./app/database/dboperations'); // Assumes dboperations.js exports functions

const PORT = 3000;


const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        dbOperations.getProducts((err, results) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Database query error' }));
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(results));
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello from Node.js server!');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
