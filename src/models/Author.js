const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
    },

    birthday:{
        type:Date,
    },

    gender:{
        type:String,
        enum:['M','F','O']
    },

    posts:{
        type:[Schema.Types.ObjectId],
        ref:'posts'
    },

    profilePic:{
        type:String
    },

    isActive:{
        type:Boolean,
        default:true
    }

},{timestamps:true});

module.exports = mongoose.model('authors',AuthorSchema);