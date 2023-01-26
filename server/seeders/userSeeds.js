const User = require ('../models/User');

const userData = [
    {
        name: 'fidel',
        password: 'test12345'
    },
    {
        name: 'graslow',
        password: 'test12345'
    },
    {
        name: 'JT',
        password: 'test12345'
    },
    {
        name: 'steezy1416',
        password: 'test12345'
    },
    {
        name: 'lecilu',
        password: 'test12345'
    }
]

const seedUsers = () => {
    return User.insertMany(userData)
    .then(users => {
        return users;
    })
}

module.exports = seedUsers;