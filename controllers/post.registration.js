//Модель объекта, который передается в render при регистрации
var registrationObj = require("../models/custom/registration.js");
//Модель пользвателей
var userModel = require('../models/db/user.js');
module.exports = async function (req, res){
  try{
      var resObj = new registrationObj(req.session.user);
      if (!req.body) throw "Заполните поля";
      var login = req.body.login;
      var password = req.body.password;
      var role = req.body.role;
      var rePassword = req.body.re_password;
      var model = new userModel();
      model.checkPassword(password,rePassword);
      await model.checkLogin(login);
      await model.saveUser(login,password,role);
      resObj.succsess = "Успешное сохранение пользователя";
      res.render('registration',resObj);
  }
  catch(err){
    resObj.error = err;
    res.render('registration',resObj);
  }

}
