var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
	date : {
        type: Date,
        required: true,
        default:new Date()
    },
    title : {
        type: String,
        required: true
    },
    description:{
    	type: String,
        required: true
    },
    fullText:{
    	type: String,
        required: true
    }
});
schema.methods.findPost = async function(id){
	try{
		var post = await postModel.find({_id:id});
		if(post.length == 0){
			throw "Данной статьи не найдено";
		}else{
			return post[0];
		}
	}
	catch(err){
		throw err;
	}
}
schema.methods.deletePost = async function(id){
	try{
		await postModel.remove({ _id: id });
		return;
	}
	catch(err){
		throw "Ошибка удаления статьи";
	}
}
schema.methods.updatePost = async function(id,data){
	try{
		await postModel.update({ _id: id }, { $set: data });
		return;
	}
	catch(err){
		console.log(err);
		throw "Ошибка обновления статьи";
	}
}
schema.methods.count = async function(id){
	try{
		var count = await postModel.count();
		return count;
	}
	catch(err){
		throw "Ошибка получения количества статей";
	}
}
schema.methods.savePost = async function(data){
	try{
		var post = new postModel(data);
		await post.save();
		return;
	}
	catch(err){
		throw "Ошибка сохранения статьи";
	}
}

schema.plugin(mongoosePaginate);
var postModel = mongoose.model('post', schema);
module.exports = postModel;
