var express = require('express');
var router = express.Router();

var loginController = require('../controllers/admin/login');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('admin ddd');
});
/* GET users listing. */
router.get('/login', function(req, res,next) {
    res.render('admin/login')
});
router.post('/login',function(req, res,next) {
    loginController.doLogin(req,res,next);
});


module.exports = router;
