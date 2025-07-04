http.createServer

const server = http.createServer((req, res) => {
  // req = requestIncomingMessage
  // res = responseServerObject
});

The callback I send get two params:
req - contain every what we need know about the client.
res - the way for server answer to client.

request contains: 
URL
METHOD
BODY // if exist
HEADERS

Example:
console.log(req.url);      // '/home'
console.log(req.method);   // 'GET'
console.log(req.headers);  // { host: ..., user-agent: ... }

response basic example:
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello from server!');

.listen(port) 
listen is a async function take my callback and turn on her when the action complete.
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
