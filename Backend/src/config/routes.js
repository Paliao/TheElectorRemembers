const express = require('express')

module.exports = function (server) {
  const router = express.Router()
  server.use('/api', router)

  const Politician = require('../api/federal/politicians/politician')
  Politician.register(router, '/politicians')
}