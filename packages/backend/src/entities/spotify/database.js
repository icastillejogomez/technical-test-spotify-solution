/**
 *  La API de spotify require un fluoj de OAuth2 para generar un token de acceso. Para esta prueba técnica
 *  hay que decidir de manera arbritaría dónde y como se va a guardar dicho token.
 *
 *  Podrìamos generarlo con un script a parte pero por simplicidad a la hora de ejecutar el servidor
 *  vamos a guardarlo en memoria.
 */

let spotifyUserToken = null

export function getSpotifyUserToken () {
  return spotifyUserToken
}

export function setSpotifyUserToken (token) {
  spotifyUserToken = token
}
