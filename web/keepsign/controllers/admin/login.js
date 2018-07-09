'use strict';

module.exports.doLogin = function(req,res,next)
{
    res.render('admin/login',{email:req.body.signinEmail});
}