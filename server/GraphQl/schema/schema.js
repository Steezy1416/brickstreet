const  { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { products, createProduct, singleProduct} = require("../resolvers/products")
const { createUser, users, login, } = require("../resolvers/auth")

const graphhttp = graphqlHTTP({
    schema: buildSchema(`

        type Product {
            _id:ID!
            name: String!
            description: String!
            price: Float!
            path: String!
            date: String!
        }

        type User {
            _id:ID!
            email: String!
            name: String!
            password: String!
        }
        type Auth {
            userId:ID!
            token: String!
            tokenExpiration:Int!
        }

        input UserInput {
            email: String!
            name: String!
            password: String!
        }

        type RootQuery {
            product: [Product!]!
            users:[User!]!
            login(email:String!, password:String!): Auth
        }

        type RootMutation {
            createUser(userInput: UserInput): User
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }

    `),
    rootValue: {
        product: products,
        users: users,
        createUser: createUser,
        login:login,
    },
    graphiql: true
})

module.exports = {graphhttp}