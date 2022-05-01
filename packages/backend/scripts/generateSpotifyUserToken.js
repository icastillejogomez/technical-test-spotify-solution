// Include .env file into process.env object
import 'dotenv/config'

// 3º party modules imports
import request from 'request'

// https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

// Generate new spotify web api credentials
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: 'Basic ' + (Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
}

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body)
  }
})
