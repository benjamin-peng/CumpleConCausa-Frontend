const { appendFile } = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const nodemailer = require("nodemailer");
const pug = require('pug');
const app = express();
const path = require('path');
const http = require('http');
const { urlencoded } = require('express');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'cumpleconcausa-bot@outlook.com', // generated ethereal user
    pass: 'cumpleconcausabot123', // generated ethereal password
  },
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const hostname = '127.0.0.1';
const port = 3000;

app.get('/home', (req, res) => {
  res.render('home');
});

//assume the form is at form.ejs
app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/form', urlencodedParser, (req, res) => {
  //var data = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);

  let data = req.body;

  const options = {
    from: "cumpleconcausa-bot@outlook.com",
    to: "lochnessdonuts@gmail.com", //my personal email; replace with client's later
    subject: "New user registration",
    text: `A new user has registered. Their information is below: \n
      age: ${data['age']}\n
      desired involvement: ${data['action']}` //and so on and so forth
  }

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });

  res.render('form-success');
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.end('test');
//   });
  
  app.listen(port, () => {
    console.log(`Listening at port 3000`);
  });