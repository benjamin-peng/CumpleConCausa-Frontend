const { appendFile } = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const hostname = '127.0.0.1'
const port = 3000;

app.get('/home', (req, res) => {
  res.render('home');
})

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.end('test');
//   });
  
  app.listen(port, () => {
    console.log(`Listening at port 3000`);
  });