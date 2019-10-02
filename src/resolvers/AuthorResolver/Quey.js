const {getAllAuthors,getOneAuthor} = require('../../services/AuthorServices');

const getAuthors = async()=>{
    const authors = await getAllAuthors();
    return authors;
};

const getSingleAuthor = async(_,params)=>{
    const author = await getOneAuthor(params.id);
    if(!author) throw new Error('Author not exist');
    return author;
};

const me = async(root,params,{user})=>{
    const author = await getOneAuthor(user._id);
    return author;
};

module.exports = {
    getAuthors,
    getSingleAuthor,
    me
};