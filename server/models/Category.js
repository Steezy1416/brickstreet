const { Schema, default: mongoose } = require("mongoose")

const CategorySchema = new Schema({
    categoryName: String,
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category