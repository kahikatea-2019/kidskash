const express = require('express')
const router = express.Router()
const db = require('../server/db/starbank')

router.get('/', (req, res) => {
  db.retrieveAllStars()
    .then(stars => {
      res.send(stars)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
    err.message)
    })
})

module.exports = router
