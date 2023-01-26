const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const createUser = async (args) => { 
    try {
        
        const user = await User.findOne({username:args.userInput.username});
        if(user){
            throw new Error("User already Exist")
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(args.userInput.password, salt);
        const newuser = new User({
            username:args.userInput.username,
            name:args.userInput.name,
            password:hash
        })

        return newuser.save().then(user =>{
            return {...user._doc, _id:user.id, password:null}
        })

    } catch (error) {
        throw error
    }
}
// const createUser = (args) => {

//     return User.findOne({email:args.userInput.email})
//     .then(user => {
//         if(user){
//             throw new Error("user already exist") 
//         }
    
//         const salt = bcrypt.genSaltSync(10);
//             const hash = bcrypt.hashSync(args.userInput.password, salt);
//             const newuser = new User({
//                 email:args.userInput.email,
//                 name:args.userInput.name,
//                 password:hash
//             })
    
//             return newuser.save().then( user =>{
//                 return {...user._doc, _id:user.id, password:null}
//             })
//     })
//     .catch()
// }

const login = async ({username, password}) => {
    const user = await User.findOne({username:username})

    if(!user){
        throw new Error("User Does not Exist")
    }
    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw new Error("Incorrect Login Details")
    }

    const token = jwt.sign({userId:user.id, username: user.username},"secretkey4000",
        { expiresIn: '1h' })

    return { userId:user._id, token:token, tokenExpiration: 1}

}

const users = () => {
    return User.find().then( users => {
        return users.map(user => {
            return { ...user._doc, _id:user.id }
        })
    })
    .catch( (err) => {
        console.log(err)
    })
}


module.exports = {createUser, users, login}