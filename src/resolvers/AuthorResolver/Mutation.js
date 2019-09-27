const {createAuthor,updateAuthor,deleteAuthor} = require('../../services/AuthorServices');


const createNewAuthor = async(_,params)=>{
    const author = await createAuthor(params.data); //createAuthor(params.data);
    return author;
};

const updateOneAuthor = async(_,params)=>{
    const author = await updateAuthor(params.id,params.data);
    //const author =  await getOneAuthor(params.id);
    if(!author) throw new Error('Author not exist');
    //Object.keys(params.data).forEach(key => author[key] = params.data[key]);
    //author.save({new:true});
    return author;
};

const deleteOneAuthor = async(_,params)=>{
    const author = await deleteAuthor(params.id);
    if(!author) throw new Error('Author not exist');
    return 'Author delte';
};

module.exports={
    createNewAuthor,
    updateOneAuthor,
    deleteOneAuthor
};