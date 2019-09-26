const {createAuthor} = require('../../services/AuthorServices');

const createNewAuthor = async(_,params)=>{
    const author = await createAuthor(params.data); //createAuthor(params.data);
    return author;
};

module.exports={
    createNewAuthor
};