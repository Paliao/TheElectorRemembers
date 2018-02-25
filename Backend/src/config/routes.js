const express = require('express')

module.exports = function (server) {
  
  const router = express.Router()
  server.use('/api', router)

  const politician = require('../api/federal/politicians/politicianService')
  politician.register(router, '/politicians')
}