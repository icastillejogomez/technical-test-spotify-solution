// Database imports
import { getModel, modelsKeys } from '../entities/postgres/database.js'

export default function apiTrackerMiddleware (req, _, next) {
  // Log request (here we could use a logger)
  console.log(`[${req.method}] ${req.originalUrl}`)

  // Get model
  const APIHistory = getModel(modelsKeys.APIHistory)
  const registry = APIHistory.build({
    ipAddress: req.ip,
    timestamp: new Date(),
    method: req.method,
    path: req.path,
    query: req.originalUrl.indexOf('?') === -1 ? '' : `?${req.originalUrl.split('?')[1]}`,
    body: JSON.stringify(req.body),
    status: 'pending',
    statusCode: null,
    userAgent: req.get('User-Agent')
  })

  registry.save()
    .then(() => {
      req.tracker = registry
    })
    .catch((error) => {
      console.error('There was an error while saving the API history')
      console.error(error)
    })
    .finally(() => {
      next()
    })
}
