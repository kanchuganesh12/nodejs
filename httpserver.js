let http = require("http");

let server = http.createServer((req, res) => {
  res.write("<h1>welcome to https server</h1>");
  res.end();
});

server.listen(8080);
console.log("server listening port num 8080");
