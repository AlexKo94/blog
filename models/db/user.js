var mongoose = require('mongoose');
var md5 = require('md5');
var schema = new mongoose.Schema({
    login : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role:{
        type: Number,
        required: true
    }
});
schema.methods.checkAuth = async function(login,password){
    try{
        password = md5(password);
        var user = await userModel.find({login:login,password:password});
        if(user.length > 0){
            return Promise.resolve(user[0]);
        }
        else{
            return Promise.reject("Неверный логин или пароль");
        }

    }
    catch(err){
        console.log(err);
       return Promise.reject("Ошибка авторизации, попробуйте позднее!");
    }
}
schema.methods.checkPassword = function(password,rePassword){
    try{
        if(password != rePassword){
            throw "Пароли не совпадают";
        }
        else{
            return;
        }
    }
    catch(err){
        throw err;
    }

}
schema.methods.checkLogin = async function(login){
    try{
        var user = await userModel.find({login:login});
        console.log(user);
        if(user.length > 0){
            throw "Такой пользователь уже зарегистрирован";
        }
        else{
            return;
        }
    }
    catch(err){
        throw err;
    }
}
schema.methods.saveUser = async function(login,password,role){
    try{
        password = md5(password);
        var user = new userModel({
            login:login,password:password,role:role
        });
        await user.save();
        return;
    }
    catch(err){
        throw err;
    }

}
var userModel = mongoose.model('users', schema);
module.exports = userModel;
