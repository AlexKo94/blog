//Модель объекта, который передается в render на страницу ошибок
function errorObj(err){
	this.title="Ошибка";
	this.error= err || "Ошибка";
	this.auth = undefined;
}
module.exports = errorObj;
