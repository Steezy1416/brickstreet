const { Schema, default: mongoose } = require("mongoose")

const ChatSchema = new Schema({
    chatName: String,
    sellerId: String,
    buyerId: String,
    messageIds: [String]
})

const Chat = mongoose.model("Chat", ChatSchema)

module.exports = Chat