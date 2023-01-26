const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const { createServer } = require("http")
const { Server } = require("socket.io")
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { json } = require("express")
const db = require("./config/connection")
const { typeDefs, resolvers } = require("./schema")
const authRouter = require('./router/authRouter');
const path = require('path');


const PORT = process.env.PORT || 4000
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', authRouter);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

const httpServer = createServer(app)
const io = new Server(httpServer)

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("sendMessage", (data) => {
        socket.broadcast.emit("displayMessage", data)
    })
    socket.on("deleteMessage", (data) => {
        socket.broadcast.emit("displayMessageAfterDelete", data)
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

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
