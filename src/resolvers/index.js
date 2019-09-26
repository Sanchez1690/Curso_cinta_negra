const AuthorsResolvers = require('./AuthorResolver');

module.exports ={
    Query:{
        ...AuthorsResolvers.Query
    },
    Mutation:{
        ...AuthorsResolvers.Mutation
    }
};