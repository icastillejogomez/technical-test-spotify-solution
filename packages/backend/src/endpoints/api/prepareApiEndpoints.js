// Import models endpoints
const prepareAlbumsEndpoints = require('./albums/index')
const prepareArtistsEndpoints = require('./artists/index')

function prepareApiEndpoints(router) {
  // Define artists endpoints
  prepareArtistsEndpoints(router)
  
  // Define albums endpoints
  prepareAlbumsEndpoints(router)

  // You can implement more API endpoints here...
}

module.exports = prepareApiEndpoints