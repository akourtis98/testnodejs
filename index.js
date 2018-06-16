const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {

    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname;

    const trimmedPath = path.replace(/\/+|\/+$/g, '');

    res.end("hello mate");
});

server.listen(3000, function() {
    console.log("server is listening in port 3000")
})