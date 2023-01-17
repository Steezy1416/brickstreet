const { Schema, default: mongoose } = require("mongoose")

const PostSchema = new Schema({
    postImage: String,
    title: String,
    description: String,
    bidPrice: String,
    userId: String,
    bidderIds: [String],
    createdAt: String
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post