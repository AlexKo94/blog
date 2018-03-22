//Модель объекта, который передается в render на страницу редактирования статей
function articleObj(user){
	this.title="Добавление статьи";
	this.error=undefined;
	this.inputs=undefined;
	this.auth=user;
	this.action='/article';
}
module.exports = articleObj;
