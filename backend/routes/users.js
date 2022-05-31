var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/config.json');

//TODO:: Change IP whitelist when shipped!

const uri = "mongodb+srv://admin:" + config.mongopass + "@cluster0.3bozv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
  console.log('connected to db');
})
.catch((err) => {
  console.log(err);
});

router.post('/', function(req, res, next) {
  console.log('test');
  console.log(req.body);
  
  client.connect(err => {
    console.log('connected');
    /*
    const db = client.db('users');
    const col = db.collection('userInfo');
    col.insertOne(req.body);
    */
    //client.close();
  });

});


module.exports = router;
