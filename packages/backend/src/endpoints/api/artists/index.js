function prepareArtistsEndpoints(router) {
  
  // GET artists by query
  router.get('/artists', (req, res) => {
    // Get user query
    const query = req.query.q

    // Search artists on spotify
    // TODO: implement response
    res.status(200).json({ query })
  })

}

module.exports = prepareArtistsEndpoints