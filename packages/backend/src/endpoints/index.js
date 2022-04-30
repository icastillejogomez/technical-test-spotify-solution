// Import express stuff
const express = require('express')
const prepareApiEndpoints = require('./api/prepareApiEndpoints')

function prepareServerEndpoinst(expressApp) {
  // Create routers
  const apiRouter = express.Router()

  // Set routers prefixes
  expressApp.use('/api', apiRouter)

  // Handle routes
  prepareApiEndpoints(apiRouter)
}

module.exports = prepareServerEndpoinst