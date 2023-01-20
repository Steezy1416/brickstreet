const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const { createServer } = require("http")
const { Server } = require("socket.io")
const express = require("express")
const cors = require("cors")
const { json } = require("express")
const db = require("./config/connection")
const { typeDefs, resolvers } = require("./schema")

const PORT = process.env.PORT || 4000
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

io.on("connection", (socket) => {
    console.log(socket.id)
})

const startServer = async () => {

    await server.start()

    app.use("/graphql", cors(), json(), expressMiddleware(server))

    db.once("open", () => {
        httpServer.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:4000/graphql`);
        })
    })
}

startServer()
