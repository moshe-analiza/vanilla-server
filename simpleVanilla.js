import http from 'http';

const PORT = 3001;

const server = http.createServer();

server.on("request", (req, res) => {
    req.on("data", () => { })
    req.on("end", () => {
        res.end();
    })
    req.on('error', err => {
        console.error('Request error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Server error' }));
    });
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});