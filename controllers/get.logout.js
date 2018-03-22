module.exports = function (req, res){
    if (req.session.user) {
    delete req.session.user;
    res.redirect('/');
  }
}
