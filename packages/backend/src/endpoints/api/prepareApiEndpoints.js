// Middlewares imports
import apiTrackerMiddleware from '../../middlewares/apiTrackerMiddleware.js'
import finishApiTrackerMiddleware from '../../middlewares/finishApiTrackerMiddleware.js'

// Import models endpoints
import prepareAlbumsEndpoints from './albums/index.js'
import prepareArtistsEndpoints from './artists/index.js'

function prepareApiEndpoints (router) {
  // Define tracker middleware
  router.use(apiTrackerMiddleware)

  // Define artists endpoints
  prepareArtistsEndpoints(router)

  // Define albums endpoints
  prepareAlbumsEndpoints(router)

  // You can implement more API endpoints here...

  // Finally we have to complete tracker data
  router.use(finishApiTrackerMiddleware)
}

export default prepareApiEndpoints
