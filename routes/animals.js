var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var myObj = {name: "This is the returned object"}
  res.send("This is the returned object");
});

module.exports = router;
