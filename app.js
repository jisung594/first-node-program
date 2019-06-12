// BUILDING A WEB SERVER W/ NODE.JS
const http = require('http');

const hostname = '127.0.0.1';
// above is the address of LOCALHOST
// loopback address; a non-routable IP address that is defined as referring to the "local" computer
// "no place like 127.0.0.1, get it ha haha haa"
const port = 3001;
// can be anything (3000 was already being used)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nHELLO FUCKING WORLD\nMOTHERFUCKING WORLD');
});

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log("HELLO WORLD");
});
