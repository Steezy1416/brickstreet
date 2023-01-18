const dotenv = require('dotenv')
const db = require('./db')
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

//Require routes
const authLogin = require('./router/authRouter')

// CREATE OUR SERVER
dotenv.config()
const PORT = process.env.PORT || 4100;
const app = express()

// SETUP THE MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// SETUP OUR OWN ROUTERS AS MIDDLEWARE
app.use("/api", authLogin)

// INITIALIZE OUR DATABASE OBJECT
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// PUT THE SERVER IN LISTENING MODE
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))