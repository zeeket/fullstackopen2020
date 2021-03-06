require('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI

let PORT = 3001

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = { MONGODB_URI, PORT }
