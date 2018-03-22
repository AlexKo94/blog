//Модель объекта, который передается в render на страницу просмотра статьи
function viewArticleObj(user,title){
	this.title="Статья | "+title;
	this.post={};
	this.auth = user;
}
module.exports = viewArticleObj;
