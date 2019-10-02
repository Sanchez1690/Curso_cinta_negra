const {createPost,updatePost,deletePost} = require('../../services/PostServices');
//const { getOneAuthor} = require('../../services/AuthorServices');

const createOnePost = async(_,{data},{user})=>{
    data.author=user._id;
    const post = await createPost(data);
    /*const author =await getOneAuthor(params.data.author);
    author.posts.push(post._id);
    author.save();*/
    user.posts.push(post.id);
    user.save();
    return post;
};

const updateOnePost = async(_,params,{user})=>{
    const post = await updatePost(params.id,params.data,user);
    if(!post) throw new Error('Post not exist');
    return post;
};

const deleteOnePost = async(_,params,{user})=>{
    const post =await deletePost(params.id,user);
    if(!post) throw new Error('Post not exist');
    return post;
};

module.exports={
    createOnePost,
    updateOnePost,
    deleteOnePost
};