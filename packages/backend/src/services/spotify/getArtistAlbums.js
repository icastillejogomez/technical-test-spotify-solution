// Axios import
import axios from 'axios'

// Spotify in-memory database imports
import { getSpotifyUserToken } from '../../entities/spotify/database.js'

// Define constants
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL

const getArtistAlbums = async (artistId) => {
  const response = await axios({
    method: 'get',
    baseURL: SPOTIFY_API_BASE_URL,
    url: `/v1/artists/${artistId}/albums`,
    headers: {
      Authorization: `Bearer ${getSpotifyUserToken()}`
    }
  })

  // Here we have to check properly the possible error, and pass trough the correr payload...

  return response.data.items
}

export default getArtistAlbums
