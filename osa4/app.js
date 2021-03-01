const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const blogsRouter = require('./controllers/blogs')
app.use('/api/blogs', blogsRouter)

const usersRouter = require('./controllers/users')
app.use('/api/users', usersRouter)

module.exports = app
