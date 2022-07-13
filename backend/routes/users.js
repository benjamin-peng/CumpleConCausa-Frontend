var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/config.json');
const User = require('../models/user');

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
  const user = new User(req.body);
  /*
  const user = new User({
    firstName: "adsf",
    lastName: "adsf",
    email: "asdf",
    phone: "asdf",
    charity: "asdf"
  })
  */
  console.log('test');
  console.log(req.body);

  user.save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });

});


module.exports = router;
