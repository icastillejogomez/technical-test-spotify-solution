// Database imports
// import { getModel, modelsKeys } from '../entities/postgres/database.js'

export default function finishApiTrackerMiddleware (req, res, next) {
  // Try to get tracker id
  const registry = req.tracker
  if (!registry) {
    console.warn(`Tracker was not found in [${req.method}] ${req.originalUrl}`)
    return next()
  }

  if (!registry.id) {
    console.warn(`Tracker id was not found in [${req.method}] ${req.originalUrl}`)
    return next()
  }

  // Complete the tracker
  registry.set({
    status: res.statusCode >= 200 && res.statusCode < 300 ? 'success' : 'error',
    statusCode: res.statusCode
  })

  // Save the tracker but without blocking the response
  registry.save()
    .then(() => console.log('Tracker saved'))
    .catch(error => {
      console.error('There was an error while saving the finished API history')
      console.error(error)
    })

  // Continue the response
  next()
}
