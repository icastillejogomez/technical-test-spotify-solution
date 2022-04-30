function prepareAlbumsEndpoints (router) {
  // GET artist albums
  router.get('/:artist/albums', (req, res) => {
    // Artist identifier
    const artistId = req.params.artist

    // Get artist albums from spotify
    // TODO: implement response
    res.status(200).json({ artistId })
  })
}

export default prepareAlbumsEndpoints
