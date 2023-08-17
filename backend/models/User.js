const { default: mongoose } = require('mongoose');
const connectToMongo=require('mongoose')




const UserSchema = new connectToMongo.Schema({
    name:{
        type:String,
        required:true
    },

   email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    

});
const User = mongoose.model('user',UserSchema);

module.exports= User
