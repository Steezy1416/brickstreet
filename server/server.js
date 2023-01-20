const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const express = require("express")
const cors = require("cors")
const { json } = require("express")
const db = require("./config/connection")
const { typeDefs, resolvers } = require("./schema")

const app = express()

const PORT = process.env.PORT || 3001
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const startServer = async () => {

    await server.start()

    app.use("/graphql", cors(), json(), expressMiddleware(server))

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:4000/graphql`);
        })
    })
}

startServer()
