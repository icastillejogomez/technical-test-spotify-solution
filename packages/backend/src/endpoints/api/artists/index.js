// Handlers imports
import searchArtists from '../../../services/spotify/searchArtists.js'

function prepareArtistsEndpoints (router) {
  // GET artists by query
  router.get('/artists', async (req, res) => {
    // Get user query
    const query = req.query.q
    if (!query) {
      return res.status(400).json({ error: 'Missing query' })
    }

    try {
      // Search artists on spotify
      const artists = await searchArtists(query)
      res.status(200).json({ artists })
    } catch (error) {
      console.error(error)
      res.status(500).end()
    }
  })
}

export default prepareArtistsEndpoints
