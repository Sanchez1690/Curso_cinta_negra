const {Posts} = require('../models');

//const createPost = (data)=>  Posts.create(data);
const createPost = async(data) => { 
    const post  = await Posts.create(data);
    const populatedPost = await getSinglePost(post._id);
    return populatedPost;
};

const getAllPosts = () => Posts.find({isActive:true}).populate('author');

const getSinglePost = (id) => Posts.findOne({_id:id,isActive:true}).populate('author');

const updatePost = (id,data) => Posts.findOneAndUpdate({_id:id,isActive:true},{...data},{new:true});

const deletePost = (id)=> Posts.findByIdAndUpdate(id,{isActive:false});

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
};