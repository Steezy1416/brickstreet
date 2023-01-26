const Category = require('../models/Category');

const categoryData = [
    {
        categoryName: 'Classic'
    },
    {
        categoryName: 'Brickheads'
    },
    {
        categoryName: 'Minifigures'
    },
    {
        categoryName: 'Flowers'
    },
    {
        categoryName: 'Architecture'
    },
    {
        categoryName: 'Marvel'
    },
    {
        categoryName: 'Harry Potter'
    },
    {
        categoryName: 'Disney'
    },
    {
        categoryName: 'Star Wars'
    },
    {
        categoryName: 'Avatar'
    },
    {
        categoryName: 'Cars'
    },
    {
        categoryName: 'Creator'
    },
    {
        categoryName: 'City'
    },
    {
        categoryName: 'Ideas'
    }
]

const seedCategories = () => {
    return Category.insertMany(categoryData)
        .then(categories => {
            return categories;
        })
}

module.exports = seedCategories;