require('dotenv').config();
const {GraphQLServer}= require('graphql-yoga');
const {importSchema} = require('graphql-import');
const resolvers = require('./src/resolvers');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});

const mongo = mongoose.connection;

mongo.on('error',(error)=>console.log(error)).once ('open',()=>console.log('Connected on database'));

const typeDefs = importSchema(__dirname+'/schema.graphql');

/*
const typeDefs= `
type Query{
    hello(name:String):String!
    getUser:[User!]
    getUserSpfic(id:Int ):User
}

type Mutation{
    createUser(name:String!,age:Int!):User
    modifyUser(name:String,age:Int,id:Int!):User
}

type User{
    id:Int!,
    name:String!,
    age:Int!
}
`;*/
/**modifyUser(name:String,age:Int,id:Int!):User */
/*
const users = [];

const resolvers={
    Query:{
        hello:(root,params,context,info)=> `Hola ${params.name}`,
        getUser:(root,params,context,info)=> users,
        getUserSpfic:(root,params,context,info)=>users[params.id]
    },
    Mutation:{
        createUser:(root,params,context,info)=>{
            const user = {id:users.length+1,name:params.name,age:params.age};
            users.push(user);
            return user;
        },
        modifyUser:(root,params,context,info)=>{
            let userm = {id:params.id,name:params.name,age:params.age};
            //users[id]= {name:params.name,age:params.age}
            users.splice(params.id,1,userm);
            return userm;
        }
    }
};
*/
const server = new GraphQLServer({typeDefs, resolvers});

server.start(()=> console.log('Works in port 4000 :)'));