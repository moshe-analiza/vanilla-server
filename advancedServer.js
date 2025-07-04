import http from 'http';

const PORT = 3001;

const server = http.createServer();
const routes = {
    GET: {
        "/": async (req, res) => {
            res.end("GET method")
        },
        "/about": async (req, res) => {
            res.end("about page on method: " + req.method);
        },
    },
    POST: {
        "/": async (req, res) => {
            res.end("POST method")
        }
    }
}

function middle(req, res, next) {
    console.log(new Date(), "url: " + req.url, "method: " + req.method, "host: " + req.headers.host);
    next(req, res);
}

server.on("request", (req, res) => {
    req.on("data", () => { })
    if (routes[req.method]?.[req.url])
        middle(req, res, routes[req.method][req.url]);
    else {
        res.statusCode = 404;
        res.end("Page not found");
    }

    req.on('error', err => {
        console.error('Request error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Server error' }));
    });
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

function returnHomePage(res) {
    res.end("Hello home page");
}