const {createAuthor,getOneAuthor,deleteAuthor} = require('../../services/AuthorServices');
const authenticate = require('../../utils/authenticate');

const createNewAuthor = async(_,params)=>{
    const author = await createAuthor(params.data); //createAuthor(params.data);
    return author;
};

const updateOneAuthor = async(_,params)=>{
    //const author = await updateAuthor(params.id,params.data);
    const author =  await getOneAuthor(params.id);
    if(!author) throw new Error('Author not exist');
    Object.keys(params.data).forEach(key => author[key] = params.data[key]);
    author.save({new:true});
    return author;
};

const deleteOneAuthor = async(_,params)=>{
    const author = await deleteAuthor(params.id);
    if(!author) throw new Error('Author not exist');
    return 'Author delte';
};

const login = async(_,params)=>{
    const token = await authenticate(params).catch(e=>{throw e;});
    return {token,message:'Login Successful'};
};

module.exports={
    createNewAuthor,
    updateOneAuthor,
    deleteOneAuthor,
    login
};