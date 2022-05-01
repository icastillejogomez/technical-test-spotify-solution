// Handlers imports
import getArtistAlbums from '../../../services/spotify/getArtistAlbums.js'

function prepareAlbumsEndpoints (router) {
  // GET artist albums
  router.get('/artists/:artist/albums', async (req, res) => {
    // Artist identifier
    const artistId = req.params.artist
    if (!artistId) {
      return res.status(400).json({
        error: {
          code: 'get-artist-albums/missing-artist-id',
          message: 'Missing artist identifier'
        }
      })
    }

    try {
      // Get artist albums from spotify
      const albums = await getArtistAlbums(artistId)
      res.status(200).json({ albums })
    } catch (error) {
      console.error(error)
      res.status(500).json()
    }
  })
}

export default prepareAlbumsEndpoints
