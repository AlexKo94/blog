var postModel = require('../models/db/post.js');
var articleObj = require('../models/custom/article.js');
module.exports = async function (req, res){
  try{
    var update = req.query.update || false;
    var model = new postModel();
    if(update){
      await model.updatePost(update,req.body);
      res.redirect('/');
    }
    else{
      req.body.date = new Date();
      await model.savePost(req.body);
      res.redirect('/');
    }

  }catch(err){
    console.log(err);
    var resObj = new articleObj(req.session.user);
    resObj.error = err;
    res.render('article',resObj);
  }
}
