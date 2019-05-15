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

router.put('/', (req, res) => {
  // expect req.body.childId && req.body.newAllocated
  if (req.body.childId) {
    const { childId, newBoxed } = req.body
    db.updateStarsInStarBank(childId, newBoxed)
      .then(() => {
        res.json({ Okay: true })
      })
      .catch((err) => res.json({ Okay: false, error: err.message }))
  } else {
    res.json({ Okay: false, error: 'Content is required.' })
  }
})

module.exports = router
