//Модель объекта, который передается в render на страницу ошибок
var errorObj = require("../models/custom/error.js");
//Модель объекта, который передается в render на главную страницу
var authObj = require("../models/custom/auth.js");
//Модель пользвателей
var userModel = require('../models/db/user.js');
module.exports = async function (req, res){
  try{
    var resObj = new authObj(req.session.user);
    if (!req.body || req.body.login == "" || req.body.password == "") throw "Заполните поля!";
    var login = req.body.login;
    var password = req.body.password;
    var model = new userModel();
    var user = await model.checkAuth(login,password);
    req.session.user = {id:user._id,username:user.login,role:user.role};
    res.redirect('/');
  }
  catch(err){
    resObj = new errorObj(err);
    res.render('auth',resObj);
  }
}
