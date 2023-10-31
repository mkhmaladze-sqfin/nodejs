
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000 ;
// const config = require('config')
// console.log(config);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/status', (req, res) => {
//     res.send('ok')
//   })


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
///////////////////////////////////////////////////////////////////////////
const http = require('http');
const hostname = '127.0.0.1';
//const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});