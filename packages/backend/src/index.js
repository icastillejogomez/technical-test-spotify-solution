// Import express stuff
import express from 'express'
import prepareServerEndpoinst from './endpoints/index.js'

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
