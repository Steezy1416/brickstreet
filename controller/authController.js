const bcrypt = require("bcrypt")
const User = require('../model/User')
const jwt = require("jsonwebtoken")
const { createTokens, createRefreshTokens } = require('../middleware/jwt_token')



registerUser = async (req, res) => {
    try {
        const {username, password } = req.body;
        // validate inputs
         if ( !username || !password ) res.status(400).json({ error: "Username and Password are required" })
        
        const existingUser = await User.findOne({ username: username });
       // check if user exist
        if (existingUser) res.status(400).json({ error: "User already exists." })
        
        // hash password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);
       
        // create a new user
        const newUser = new User({
            username:username,password: passwordHash
        }); 

        // save user
       const savedUser = await newUser.save();
       res.status(200).json({
            success: true,
            user: {
                username:savedUser.username            
            }
        })


    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
}

loginUser = async (req, res) =>{

    try {
        const {username, password} = req.body;

        // validate user input
        if(!username || !password){
            res.status(400).json({error:"Username and password are required"});
        }

        // find the provided username to the Db
        const user = await User.findOne({username:username}).exec()

        if(!user) res.status(400).json({error:"User not Found."})

        // Compare the given password with the hashed passwoed
        const match = await bcrypt.compare(password, user.password)
            if(match) {


            //create a token and save it in the cookie
            const accessToken = createTokens(user)
            const refreshToken = createRefreshTokens(user)
 
            //const updateUser = await User.findOneAndUpdate({username:username},{$set:{refreshToken:refreshToken}})
            // Saving refreshToken with current Client
    user.refreshToken = refreshToken;
    const result = await user.save();
            // Save token to cookies
            res.cookie("token", refreshToken, {
                httpOnly:true,
            })
            .status(200).json( {id:user._id, username:user.username, token:accessToken});
        }else{
            res.status(400).json({error:"error:Unknown"});
        }
    } catch (error) {
        res.status(400).json({error:error});
    }
   
}

/* Logout functionality demo code

 logoutUser = async (req, res) =>{

    try {
        const {username, password} = req.body;

        // validate user input
        if(!username || !password){
            res.status(400).json({error:"Username and password are required"});

        // find the provided username to the Db
        const user = await User.findOne({username:username}).exec()

        if(!user) res.status(400).json({error:"User not Found."})
        }

        router.post('/logout', (req, res) => {
            if (req.session.loggedIn) {
              req.session.destroy(() => {
                res.status(204).end();
              });
            }
            else {
              res.status(404).end();
            }
          }); */

const handleRefreshToken = async (req, res)=>{

    // Get the generate token from the user
    const cookies = req.cookies;
    refreshToken = cookies.token;
    console.log(refreshToken)
    // check the verify token
    if(!refreshToken) return res.status(401).json({error:"Not Authenticated"})

    const user = await User.find({refreshToken:refreshToken}).exec()
    if(!user) return res.status(403).json({error:"User not Found"})

    console.log("Token:", user[0].refreshToken)
    // verify the token

        jwt.verify(refreshToken, process.env.JWT_REFRESH, (err, user_d) => {
            if(err) res.status(403).json({error:err})
            // const aToken = createTokens(user)
            const rToken = createRefreshTokens(user)
             //user.refreshToken = rToken
    
            // const id = foundClient._id;
    
                const aToken = jwt.sign({username:user.username, id:user_d.id}, process.env.JWT_SECRET,{expiresIn:"30s"});
     
            
            return res.status(200).json({id:user_d.id, username:user_d.username, token:aToken});
       })
   
        
}


module.exports = {registerUser, loginUser, handleRefreshToken}
