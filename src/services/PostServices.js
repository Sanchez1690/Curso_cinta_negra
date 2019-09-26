const {Authors} = require('../models');

const createAuthors = (data)=>  Authors.create(data);

const getAuthors = ()=> Authors.find({isActive:true});

module.exports = {
    createAuthors,
    getAuthors
};