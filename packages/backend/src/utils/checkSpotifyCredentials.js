// Axios imports
import axios from 'axios'

// Spotify in-memory database imports
import generateSpotifyUserToken from './generateSpotifyUserToken.js'
import { setSpotifyUserToken } from '../entities/spotify/database.js'

// Define constants
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL
const EXAMPLE_TRACK_ID = '2TpxZ7JUBn3uw46aR7qd6V'

/**
 * This function checks if the user has entered the correct Spotify credentials.
 * If not it will throw an error.
 */
export default async function checkSpotifyCredentials () {
  // Try to get a fresh spotify api user token
  const spotifyUserToken = await generateSpotifyUserToken()
    .catch(error => {
      // It's necessary catch the error because the function is async and node logs warnings if an error is not handled...
      throw error
    })

  if (!spotifyUserToken) {
    throw new Error('Was not possible to generate a spotify user token')
  }

  // Make a request to the Spotify API to check if the token is valid
  const response = await axios({
    method: 'get',
    baseURL: SPOTIFY_API_BASE_URL,
    url: `v1/tracks/${EXAMPLE_TRACK_ID}`,
    headers: {
      Authorization: `Bearer ${spotifyUserToken}`
    }
  })
    .catch(error => {
      throw error
    })

  if (response.status !== 200) {
    throw new Error('Spotify credentials are not valid')
  }

  // Save new user token
  setSpotifyUserToken(spotifyUserToken)
}
