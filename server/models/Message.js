const { Schema, default: mongoose } = require("mongoose")

const MessageSchema = new Schema({
    textMessage: String,
    userId: String,
    chatId: String,
    createdAt: String
})

const Message = mongoose.model("Message", MessageSchema)

module.exports = Message