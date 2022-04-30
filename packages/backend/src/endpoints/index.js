// Import express stuff
const express = require('express')
const prepareApiEndpoints = require('./api/prepareApiEndpoints')

function prepareServerEndpoinst (expressApp) {
  // Create routers
  const apiRouter = express.Router()

  // Set routers prefixes
  expressApp.use('/api', apiRouter)

  // Handle routes
  prepareApiEndpoints(apiRouter)

  // You could handle here frontend routes but those will be handle with Next.js...
}

module.exports = prepareServerEndpoinst
