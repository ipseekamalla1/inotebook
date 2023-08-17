const { default: mongoose } = require('mongoose');
const connectToMongo=require('mongoose')

const NotesSchema = new connectToMongo.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    title:{
        type:String,
        required:true
    },

   description:{
        type:String,
        required:true
    },

    tag:{
        type:String,
        default: "General"
    },
    date:{
        type:Date,
        default:Date.now
    },
    

});

module.exports=mongoose.model('notes',NotesSchema)
