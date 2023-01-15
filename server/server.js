const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const { typeDefs, resolvers } = require("./schema")
const mongoose = require("mongoose")

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect("mongodb://127.0.0.1:27017/brickstreet", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once("open", () => {
    console.log("connected to database")
})


const startServer = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`Server is ready at ${url}`)
}

startServer()

