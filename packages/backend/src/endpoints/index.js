// Import express stuff
import express from 'express'
import prepareApiEndpoints from './api/prepareApiEndpoints.js'

function prepareServerEndpoinst (expressApp) {
  // Create routers
  const apiRouter = express.Router()

  // Set routers prefixes
  expressApp.use('/api', apiRouter)

  // Handle routes
  prepareApiEndpoints(apiRouter)

  // You could handle here frontend routes but those will be handle with Next.js...
}

export default prepareServerEndpoinst
