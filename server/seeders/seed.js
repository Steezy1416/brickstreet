const seedUsers = require('./userSeeds');
const seedPosts = require('./postsSeeds');
const seedCategories = require('./categorySeeds');

const db = require("../config/connection")

db.once('open', async() => {
    const users = await seedUsers()
    const categories = await seedCategories()
    const userIds = users.map(user => {
        return user._id
    })
    const categoryIds = categories.map(category => {
        return category._id
    })
    const posts = await seedPosts(userIds, categoryIds)
    console.log(users)
    console.log(categories)
    console.log(posts)
})

