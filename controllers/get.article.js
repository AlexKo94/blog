var errorObj = require("../models/custom/error.js");
var postModel = require('../models/db/post.js');
var articleObj = require('../models/custom/article.js');
module.exports = async function (req, res){
  var del = req.query.delete || false;
  var edit = req.query.edit || false;
  var resObj = new articleObj(req.session.user);
  var model = new postModel();
  if(del){
    try{
      await model.deletePost(del);
      res.redirect("/");
    }
    catch(err){
      resObj = new errorObj(err);
        res.status(400).render('error',resObj);
    }

  }
  else if(edit){
      var post = await model.findPost(edit);
      resObj.inputs = post;
      resObj.action=`/article?update=${edit}`;
    res.render('article',resObj);
  }
  else{
    res.render('article',resObj);
  }
}
