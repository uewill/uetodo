var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index11');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.send('users');
  });
  

module.exports = router;
