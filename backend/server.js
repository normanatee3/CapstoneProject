// import express
const express = require('express')
const app = express()
// import mongo
const mongoose = require('mongoose')
// import env
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
// assign port from env
const port = process.env.PORT
const morgan = require('morgan')
const userRouter = require('./routes/api/users')
const postRouter = require('./routes/api/posts')
const eventRouter = require('./routes/api/events')
// connect to mongo
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Connected to mongo")
})

// //////////Middleware
app.use(cors())
// logger
app.use(morgan('dev'))
// body parser
app.use(express.json())

// router middleware
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/events", eventRouter)


// server listener
app.listen(port, ()=>{
    console.log('server listening on ', port, '...')
})