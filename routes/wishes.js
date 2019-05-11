const express = require('express')
const router = express.Router()
const db = require('../server/db/wishes')

router.get('/', (req, res) => {
  db.retrieveAllWishes()
    .then(wishes => {
      res.send(wishes)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/dashboard/:id', (req, res) => {
  const id = req.params.id
  db.retrieveWish(id)
    .then(wish =>
      res.send(wish)
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
