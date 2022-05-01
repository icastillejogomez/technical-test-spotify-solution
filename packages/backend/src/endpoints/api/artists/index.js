// Handlers imports
import searchArtists from '../../../services/spotify/searchArtists.js'

function prepareArtistsEndpoints (router) {
  // GET artists by query
  router.get('/artists', async (req, res, next) => {
    // Get user query
    const query = req.query.q
    if (!query) {
      res.status(400).json({
        error: {
          code: 'search-artists/missing-query',
          message: 'Missing query'
        }
      })
      return next()
    }

    try {
      // Search artists on spotify
      const artists = await searchArtists(query)
      res.status(200).json({ artists })
    } catch (error) {
      console.error(error)
      res.status(500).json()
    } finally {
      next()
    }
  })
}

export default prepareArtistsEndpoints
