const Category = require ('../models/Category');

const categoryData = [
    {
        categoryName: 'Classic'
    },
    {
        categoryName: 'Minifigures'
    },
    {
        categoryName: 'Art'
    },
    {
        categoryName: 'Architecture'
    },
    {
        categoryName: 'Superheroes'
    },
    {
        categoryName: 'Harry Potter'
    },
    {
        categoryName: 'Disney'
    },
    {
        categoryName: 'Starwars'
    },
    {
        categoryName: 'Other'
    }
]

const seedCategories = () => {
    return Category.insertMany(categoryData)
    .then(categories => {
        return categories;
    })
}

module.exports = seedCategories;