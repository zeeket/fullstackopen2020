const mongoose = require('mongoose')
const config = require('../utils/config')

const mongoUrl = config.MONGODB_URI

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

module.exports = mongoose.model('Blog', blogSchema)
