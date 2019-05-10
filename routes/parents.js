const express = require('express')
const db = require('../server/db/parents')
const router = express.Router()

router.get('/parents', (req, res) => {
  db.getParents()
    .then(parents => {
      res.render('index', { parents: parents })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
