const { Query:QueryAuthor, Mutation:MutationAuthor} = require('./AuthorResolver');
const { Query:QueryPost, Mutation:MutationPost  } = require('./PostResolver');
const { URLResolver, EmailAddressResolver } = require('graphql-scalars');

module.exports ={
    EmailAddress:EmailAddressResolver,
    URL:URLResolver,
    Query:{
        ...QueryAuthor, //split object,
        ...QueryPost
    },
    Mutation:{
        ...MutationAuthor,
        ...MutationPost
    }
};