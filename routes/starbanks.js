const express = require('express')
const router = express.Router()
const db = require('../server/db/starbanks')

router.get('/', (req, res) => {
  db.retrieveAllStarBanks()
    .then(starbanks => {
      res.send(starbanks)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
