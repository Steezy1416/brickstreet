const { Schema, default: mongoose } = require("mongoose")

const PostSchema = new Schema({
    postImage: String,
    title: String,
    description: String,
    bidPrice: Number,
    userId: String,
    topBidderId: String,
    categoryIds: [String],
    availability: String,
    createdAt: String
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post