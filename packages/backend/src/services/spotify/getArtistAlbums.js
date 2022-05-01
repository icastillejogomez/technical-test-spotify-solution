// Axios import
import axios from 'axios'

// Spotify in-memory database imports
import { getSpotifyUserToken } from '../../entities/spotify/database.js'

// Define constants
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL
const SPOTIFY_CLIENT_TOKEN = getSpotifyUserToken()

const getArtistAlbums = async (artistId) => {
  const response = await axios({
    method: 'get',
    baseURL: SPOTIFY_API_BASE_URL,
    url: `/v1/artists/${artistId}/albums`,
    headers: {
      Authorization: `Bearer ${SPOTIFY_CLIENT_TOKEN}`
    }
  })

  return response.data.items
}

export default getArtistAlbums
