const {Schema, default: mongoose} = require("mongoose")
const {Post, Chat, Message} = require("./index")

const UserSchema = new Schema({
    name: String,
    password: String,
    profilePicture: String,

})

const User = mongoose.model("User", UserSchema)

module.exports = User