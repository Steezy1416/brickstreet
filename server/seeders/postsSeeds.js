const Post = require('../models/Post');
const {
    infinityGauntletPhoto,
    lionDanceGuyPhoto,
    seinfeldPhoto,
    colorsPhoto,
    racecarPhoto,
    bathroomPhoto,
    bouquetPhoto,
    tajMahalPhoto
} = require('./images')

const postData = [
    {
        title: 'Polyjuice Potion Mistake',
        description: 'No missing pieces. Includes golden Harry Potter.',
        bidPrice: 70,
        availability: 'available',
        categoryIndex: 6,
        postImage: bathroomPhoto
    },
    {
        title: 'Taj Mahal',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 4,
        postImage: tajMahalPhoto
    },
    {
        title: "Everyone Is Awesome",
        description: 'No missing pieces',
        bidPrice: 300,
        availability: 'available',
        categoryIndex: 0,
        postImage: colorsPhoto
    },
    {
        title: 'Flower Bouquet',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 3,
        postImage: bouquetPhoto
    },
    {
        title: 'Seinfeld',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 15,
        postImage: seinfeldPhoto
    },
    {
        title: 'Infinity Gauntlet',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 100,
        availability: 'available',
        categoryIndex: 5,
        postImage: infinityGauntletPhoto
    },
    {
        title: 'Racecar',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 4,
        availability: 'available',
        categoryIndex: 10,
        postImage: racecarPhoto
    },
    {
        title: 'Lion Dance Guy',
        description: 'lorem ipsum lorem ipsum',
        bidPrice: 10,
        availability: 'available',
        categoryIndex: 14,
        postImage: lionDanceGuyPhoto
    }
]

const seedPosts = (userIds, categoryIds) => {
    const newPostData = postData.map((post) => {
        return {
            title: post.title,
            description: post.description,
            bidPrice: post.bidPrice,
            availability: post.availability,
            userId: userIds[Math.floor(Math.random() * userIds.length)],
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