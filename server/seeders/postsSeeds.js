const Post = require('../models/Post');

const postData = [
    {
        title: 'Diagon Alley',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 5
    },
    {
        title: 'Eiffel Tower',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 500,
        availability: 'available',
        categoryIndex: 3
    },
    {
        title: "Ariel's Underwater Palace",
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 300,
        availability: 'available',
        categoryIndex: 6
    },
    {
        title: 'Millennium Falcon',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 7
    },
    {
        title: 'Republic Gunship',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 7
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
            categoryIds: [categoryIds[post.categoryIndex]]
        }
    })
    return Post.insertMany(newPostData)
    .then(posts => {
        return posts;
    })
}

module.exports = seedPosts;
