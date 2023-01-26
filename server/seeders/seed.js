const seedUsers = require('./userSeeds');
const seedPosts = require('./postsSeeds');
const seedCategories = require('./categorySeeds');
const Category = require('../models/Category');
const User = require('../models/User')
const Post = require('../models/Post')

const db = require("../config/connection")

db.once('open', async () => {
    await Post.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});
    const users = await seedUsers();
    const categories = await seedCategories();
    const userIds = users.map(user => {
        return user.id
    });
    const categoryIds = categories.map(category => {
        return category.id
    });
    const posts = await seedPosts(userIds, categoryIds);
    // console.log(users);
    // console.log(categories);
    // console.log(posts);
    process.exit(0);
})