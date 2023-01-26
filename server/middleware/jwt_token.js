const {sign, verify} = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config();

const createTokens = (user)=>{
    const accessToken = sign({username:user.username, id:user._id}, process.env.JWT_SECRET,{expiresIn:"30s"});
    return accessToken;
}
const createRefreshTokens = (user)=>{
    const refreshToken = sign({username:user.username, id:user._id}, process.env.JWT_REFRESH,{expiresIn:"1d"});
    return refreshToken;
}


validateToken = (req, res, next) => {
    try {
        //const accessToken = req.cookies['access-token'];
        const authHeader =req.headers.authorization;
        if(!authHeader) res.status(401).json({error:"User Not Authenticated"})

        const accessToken = authHeader.split(" ")[1];
        if(!accessToken) res.status(401).json({error:"User Not Authenticated"})

        const verifyToken = verify(accessToken, process.env.JWT_SECRET)

        if(verifyToken){
            req.authenticated = true;
            
        }
        next();
    } catch (error) {
        res.status(400).json({error:"error: "+error})
    }
    
}


module.exports = { createTokens, validateToken, createRefreshTokens}