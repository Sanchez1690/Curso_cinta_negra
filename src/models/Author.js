const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

AuthorSchema.pre('save',function(next)
{
    const author = this;
    const SALT_FACTOR =10;
    if (!author.isModified('password')) {return next();}
    bcrypt.genSalt(SALT_FACTOR,function(err,salt){
        if (err) return next(err);
        bcrypt.hash(author.password,salt,function(err,hash){
            if (err) return next(err);
            author.password=hash;
            next();
        });
    });
});

module.exports = mongoose.model('authors',AuthorSchema);