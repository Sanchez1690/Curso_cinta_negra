const { Authors } = require('../models');


const createAuthor = (data) => Authors.create(data);

const getAllAuthors = () => Authors.find({isActive:true}).populate('Posts');

const getOneAuthor = (id) => Authors.findOne({_id:id,isActive:true}).populate('Posts');

const getAuthorByEmail =(email)=> Authors.findOne({email,isActive:true});

const updateAuthor = (id,data)=> Authors.findByIdAndUpdate(id,{...data},{new:true});

const deleteAuthor = (id)=> Authors.findByIdAndUpdate({_id:id,isActive:true},{isActive:false});

module.exports = {
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    getAuthorByEmail,
    updateAuthor,
    deleteAuthor
};