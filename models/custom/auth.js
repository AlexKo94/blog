//Модель объекта, который передается в render при авторизации
function authObj(user){
	this.title="Авторизация";
	this.error=undefined;
	this.succsess=undefined;
	this.inputs=undefined;
	this.auth=user;
}
module.exports = authObj;
