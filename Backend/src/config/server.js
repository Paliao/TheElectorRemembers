const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(3000, function() {
  console.log('Backend running at port 3000')
})

module.exports = server