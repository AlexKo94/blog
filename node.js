var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var md5 = require('md5');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);
var mongoosePaginate = require('mongoose-paginate');


//пользовательские функции
var func = require('./functions.js');
//Контроллеры
var getIndexCtrl = require("./controllers/get.index.js");
var getAuthCtrl = require("./controllers/get.auth.js");
var postAuthCtrl = require("./controllers/post.auth.js");
var getRegistrationCtrl = require("./controllers/get.registration.js");
var postRegistrationCtrl = require("./controllers/post.registration.js");
var getLogoutCtrl = require("./controllers/get.logout.js");
var getArticleId = require("./controllers/get.articleId.js");
var getArticle = require("./controllers/get.article.js");
var postArticle = require("./controllers/post.article.js");


app.listen(3000, function () {
  console.log('Сервер запущен на 3000 порту');
  mongoose.connect('mongodb://localhost/blog')
  .then(()=>{
  	console.log("Успешное подключение к базе данных");
  	app.set('view engine', 'ejs');
  	app.use(session({
		  secret: 'secret',
		  resave: false,
		  saveUninitialized: false,
		  store: new MongoStore({
		    url: 'mongodb://localhost/blog',
		  })
	}))
	//Роуты
	//GET
	app.get('/', getIndexCtrl);
	app.get('/auth', getAuthCtrl);
	app.get('/registration',getRegistrationCtrl);
	app.get('/logout',getLogoutCtrl);
	app.get('/article/:id',func.chechAcsess, getArticleId);
	app.get('/article',func.chechAcsess,getArticle);
	//POST
	app.post('/auth',urlencodedParser,postAuthCtrl);
	app.post('/registration',urlencodedParser,postRegistrationCtrl);
	app.post('/article',urlencodedParser,func.chechAcsess,postArticle);
  })
  .catch((e)=>{
  	console.log(e);
  	console.log("Ошибка подключения к базе данных");
  })
});
