import http from 'http';
import { URL } from "url";

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





// explain about URL module
// const myUrl = new URL('https://example.com/page?user=dan&age=30');

// console.log(myUrl.searchParams.get('user')); // dan
// console.log(myUrl.searchParams.has('age'));  // true

// myUrl.searchParams.forEach((value, name) => {
//     console.log(`${name}: ${value}`);
// });