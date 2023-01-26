const Post = require('../models/Post');
const {eiffelTowerPhoto}= require('./images')

const postData = [
    {
        title: 'Diagon Alley',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 6
    },
    {
        title: 'Eiffel Tower',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 500,
        availability: 'available',
        categoryIndex: 4,
        postImage: eiffelTowerPhoto
        },
    {
        title: "Ariel's Underwater Palace",
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 300,
        availability: 'available',
        categoryIndex: 7
    },
    {
        title: 'Millennium Falcon',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 8
    },
    {
        title: 'Republic Gunship',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 9
    },
    {
        title: 'Pyramid',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: [5,]
    }
]

const seedPosts = (userIds, categoryIds) => {
    const newPostData = postData.map((post) => {
        return {
            title: post.title,
            description: post.description,
            bidPrice: post.bidPrice,
            availability: post.availability,
            userId: userIds[Math.floor(Math.random()*userIds.length)],
            categoryIds: [categoryIds[post.categoryIndex]],
            createdAt: new Date(),
            postImage: post.postImage
        }
    })
    return Post.insertMany(newPostData)
    .then(posts => {
        return posts;
    })
}

module.exports = seedPosts;