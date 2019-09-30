const bcrypt = require ('bcrypt');
const {getAuthorByEmail} = require('../services/AuthorServices');
const creatToken = require('./createToken');

const aunthenticate = ({email,password})=>{
    return new Promise((resolve,reject)=>{
        getAuthorByEmail(email).then(user=>{
            if(!user) reject(new Error('Author not exist'));
            bcrypt.compare(password,user.password,(err,isValid) =>{
                if(err) reject(new Error('Error to compare password'));
                isValid ? resolve(creatToken(user)) : reject(new Error('Password is incorrect'));
            });
        });
    });
};

module.exports= aunthenticate;