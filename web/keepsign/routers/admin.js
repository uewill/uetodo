var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json() 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('admin ddd');
});
/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('admin/login',null)
});
router.post('/login',urlencodedParser,function(req, res) {
  console.log(req.body);
  res.send('email:'+req.body.signinEmail);
});


module.exports = router;
