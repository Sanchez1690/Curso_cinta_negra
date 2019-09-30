const jwt = require('jsonwebtoken');

const createToken = ({email,firstName})=>{
    const payload = {
        email,
        firstName
    };

    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1d'});
};

module.exports=createToken;