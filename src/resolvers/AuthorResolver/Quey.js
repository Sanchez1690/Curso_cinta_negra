const {getAllAuthors} = require('../../services/AuthorServices');

const getAuthors = async()=>{
    const authors = await getAllAuthors();
    return authors;
};

module.exports = {
    getAuthors
};