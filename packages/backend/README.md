## Backend project

To run this server you can user `start` and `dev` commands. With `dev` command a watcher will be started (nodemon) and will restart the project each time you save some file with changes.
  
### Server port

By default, the server will run in the port 8001 but you can pass as environment variable `PORT` the port that you wish.

### Environment

To start this server you need to set some two different things:

1. Spotify client credentials: to do this you need to create a Client App: https://developer.spotify.com/documentation/web-api/
2. Start a postgres server
3. Set up the necessary environment variables.

#### Postgres server

You can run the postgres server as you want but we recommend user Docker. If you have installed Docker in your machine you can run `npm run -w packages/backend database` to stand it up.

#### Environment variables

You need to declare a `.env` file with the next necessary variables:

```bash
SPOTIFY_CLIENT_ID=xxxxxxxxxxxxxxxxx
SPOTIFY_CLIENT_SECRET=xxxxxxxxxxxxxxxxx
SPOTIFY_API_BASE_URL=https://api.spotify.com/

POSTGRES_USERNAME=xxxxxxxxxxxxxx
POSTGRES_PASSWORD=xxxxxxxxxxxxxx
POSTGRES_HOST=xxxxxxxxxxxxxx
POSTGRES_PORT=xxxxxxxxxxxxxx
POSTGRES_DB=xxxxxxxxxxxxxx
```