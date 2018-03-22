//Модель объекта, который передается в render при регистрации
var registrationObj = require("../models/custom/registration.js");
module.exports = function (req, res){
  var resObj = new registrationObj(req.session.user);
  res.render('registration',resObj);
}
