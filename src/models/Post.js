const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'authors'
    },
    coverPhoto:{
        type:String,
    },
    likes:{
        type:Number
    },
    likedBy:{
        type:[Schema.Types.ObjectId],
        ref:'authors'
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

module.exports = mongoose.model('post',PostSchema);