const express = require('express')
const router = express.Router()
const db = require('../server/db/wishes')

router.get('/wishes', (req, res) => {
  db.getWishes()
    .then(wishes => {
      res.render('wishes', wishes)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/wishes/:id', (req, res) => {
  const id = req.params.id
  db.getWish(id)
    .then(wishes => 
      res.send( wishes )
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router