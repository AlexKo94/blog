//Модель объекта, который передается в render при регистрации
function registrationObj(user){
	this.title="Регистрация";
	this.error=undefined;
	this.succsess=undefined;
	this.inputs=undefined;
	this.auth=user;
}
module.exports = registrationObj;
