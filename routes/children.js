const express = require('express')
const db = require('../server/db/children')
const router = express.Router()

router.get('/', (req, res) => {
  db.retrieveAllChildren()
    .then(children => {
      res.send(children)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
    err.message)
    })
})

module.exports = router
