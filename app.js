import http from 'http';

const PORT = 3001;

const server = http.createServer();

server.on("request", (req, res) => {
    const data = [];
    req.on("data", (chunk) => {
        data.push(chunk);
    })
    req.on("end", () => {
        let body = Buffer.concat(data).toString();
        try {
            body = JSON.parse(body);
        } catch (err) {
            console.log("Error parsed data to json: ", err.message);
        }
        console.log(body);
        res.end(JSON.stringify({
            method: req.method,
            url: req.url,
            headers: req.headers,
            body: body || {}
        }, null, 2)); 
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