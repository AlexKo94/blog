var errorObj = require("../models/custom/error.js");
var postModel = require('../models/db/post.js');
var viewArticleObj = require('../models/custom/viewArticle.js');
var func = require("../functions.js");
module.exports = async function (req, res){
  try{
      var id = req.params.id;
      var model =  new postModel();
      var post = await model.findPost(id);
      var resObj = new viewArticleObj(req.session.user,post.title);
      var obj = {};
      obj.date = func.filterDate(post.date);
      obj.title = post.title;
      obj.description = post.description;
      obj.fullText = post.fullText;
      resObj.post = obj;
      res.status(200).render('view',resObj);
  }
  catch(err){
    var resError = new errorObj((err.name == 'CastError') ? "Неверный параметр" : err);
    res.status(400).render('error',resError);
  }
}
