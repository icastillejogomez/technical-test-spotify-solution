// Import models endpoints
import prepareAlbumsEndpoints from './albums/index.js'
import prepareArtistsEndpoints from './artists/index.js'

function prepareApiEndpoints (router) {
  // Define artists endpoints
  prepareArtistsEndpoints(router)

  // Define albums endpoints
  prepareAlbumsEndpoints(router)

  // You can implement more API endpoints here...
}

export default prepareApiEndpoints
