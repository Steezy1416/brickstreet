const User = require ('../models/User');

const userData = [
    {
        name: 'Fidel',
        password: 'test12345'
    },
    {
        name: 'Alex',
        password: 'test12345'
    },
    {
        name: 'Josh',
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