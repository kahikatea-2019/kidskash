const express = require('express')
const db = require('../server/db/children')
const router = express.Router()

router.get('/children', (req, res) => {
  db.getChildren()
    .then(children => {
      res.render('index', { children: children })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
    err.message)
    })
})

module.exports = router
