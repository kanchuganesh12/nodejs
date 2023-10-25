let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "Text/html" });

  let obj = url.parse(req.url, true).query;

  if (obj.uname === "ashokit" && obj.upwd === "ashokit") {
    res.write("<h1>Login success</h1>");
  } else {
    res.write("Login fail");
  }
  res.end();
});

server.listen(4400);
console.log("server running");
