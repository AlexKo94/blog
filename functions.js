var func = {
  getArrPages:function(count,page,limit,quontity){
  	var arr = [];
  	var cPage = Math.ceil(count/limit);
  	var left = parseInt(page) - quontity;
  	var right = parseInt(page) + quontity;

  	if(left < 1){
  		left = 1;
  	}
  	if(right > cPage){
  		right = cPage;
  	}
  	for (var i = left; i <= right; i++) {
  		arr.push(i);
  	}
  	return arr;
  },
  chechAcsess:function(req,res,next){
  	if(req.session.user){
  		next();
  	}
  	else{
  		var resError = new errorObj("Вам нужно авторизоваться!");
  		res.status(400).render('error',resError);
  	}
  },
  filterDate:function(date){
  	d = new Date(date);
  	var year = d.getFullYear();
  	var month = d.getMonth()+1;
  	var day = d.getDate();
  	var dateRes = `${day}.${month}.${year}`;
  	return dateRes;
  }
}
module.exports = func;
