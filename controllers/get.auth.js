//Модель объекта, который передается в render на страницу ошибок
var errorObj = require("../models/custom/error.js");
//Модель объекта, который передается в render на главную страницу
var authObj = require("../models/custom/auth.js");
module.exports = function (req, res) {
  try{
    var resObj = new authObj(req.session.user);
	  res.render('auth',resObj);
  }
  catch(err){
    var errorObj = new errorObj();
    res.status(400).render('error',errorObj);
  }
}
