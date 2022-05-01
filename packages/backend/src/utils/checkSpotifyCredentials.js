import axios from 'axios'

// Define constants
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL
const SPOTIFY_CLIENT_TOKEN = process.env.SPOTIFY_CLIENT_TOKEN
const EXAMPLE_TRACK_ID = '2TpxZ7JUBn3uw46aR7qd6V'

/**
 * This function checks if the user has entered the correct Spotify credentials.
 * If not it will throw an error.
 */
export default async function checkSpotifyCredentials () {
  // Check if token is present
  if (!SPOTIFY_CLIENT_TOKEN) {
    throw new Error('SPOTIFY_CLIENT_TOKEN is not defined in .env file')
  }

  // Make a request to the Spotify API to check if the token is valid
  const response = await axios({
    method: 'get',
    baseURL: SPOTIFY_API_BASE_URL,
    url: `v1/tracks/${EXAMPLE_TRACK_ID}`,
    headers: {
      Authorization: `Bearer ${SPOTIFY_CLIENT_TOKEN}`
    }
  })
    .catch(error => {
      throw error
    })

  if (response.status !== 200) {
    throw new Error('Spotify credentials are not valid')
  }
}
