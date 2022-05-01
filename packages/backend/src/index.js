// Include .env file into process.env object
import 'dotenv/config'

// Import express stuff
import express from 'express'
import prepareServerEndpoinst from './endpoints/index.js'

// Database initializer import
import { startDatabaseConnection } from './entities/postgres/database.js'

// Utils imports
import checkSpotifyCredentials from './utils/checkSpotifyCredentials.js'

try {
  // Check database connection
  await startDatabaseConnection()

  // Check if spotify credentials are still valid
  await checkSpotifyCredentials()

  // Create express application
  const app = express()

  // Define constants
  const port = process.env.PORT || 3001

  // Define middlewares
  // TODO: define middlewares

  // Prepare routes
  prepareServerEndpoinst(app)

  // Start server
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
} catch (error) {
  console.error(error)
  process.exit(1)
}
