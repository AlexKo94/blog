var func = require("../../functions.js");
function indexObj(user){
	this.title="Главная";
	this.auth=user;
	this.posts = [];
	this.quontity = 2;
	this.limit = 1;
	this.page = 1;
	this.next = 2;
	this.prev = 1;
	this.arrPages = [];
	this.offset = 0;
	this.initPaginate = function(page,count){
		this.page = parseInt(page);
		this.count = count;
		this.next = {number:this.page+1,disabled:false};
		this.prev = {number:this.page-1,disabled:false};
		var countPage = Math.ceil(this.count/this.limit);
		if(this.prev.number < 1){
			this.prev.number = 1;
			this.prev.disabled = true;
		}
		if(this.next.number > countPage){
			this.next.number = countPage;
			this.next.disabled = true;
		}
		this.offset = (this.page*this.limit)-this.limit;
		this.arrPages = func.getArrPages(this.count,this.page,this.limit,this.quontity);
	}
}
module.exports = indexObj;
