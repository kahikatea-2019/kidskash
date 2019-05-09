const express = require('express')
const db = require('../db/parents.js')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getParents(id)
    .then(parents => res.send(parent))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
