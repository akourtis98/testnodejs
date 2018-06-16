const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;
    const method = req.method.toLocaleLowerCase();
    res.end("hello mate");

    console.log("req recieved on path: " + trimmedPath + " with method: " + method + " and with these query string parameters: ", queryStringObject);
});

server.listen(3000, function() {
    console.log("server is listening in port 3000")
})