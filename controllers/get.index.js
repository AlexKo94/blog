//Модель объекта, который передается в render на страницу ошибок
var errorObj = require("../models/custom/error.js");
//Модель объекта, который передается в render на главную страницу
var indexObj = require("../models/custom/index.js");
//Модель статей
var postModel = require('../models/db/post.js');
module.exports = async function (req, res) {
  try{
    var model = new postModel();
    var resObj = new indexObj(req.session.user);
      var page = req.query.page || 1;
      var count = await model.count();
      var limit = resObj.limit;
      resObj.initPaginate(page,count);
      if(req.session.user){
        var data = await postModel.paginate({}, {
        sort:     { date: 'desc'},
        offset:   resObj.offset,
        limit:    resObj.limit });
        resObj.posts = data.docs;
      }
      res.render('index',resObj);
  }
  catch(err){
    var errorObj = new errorObj();
    res.status(400).render('error',errorObj);
  }
}
