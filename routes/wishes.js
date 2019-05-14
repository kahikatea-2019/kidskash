const express = require('express')
const router = express.Router()
const db = require('../server/db/wishes')

router.get('/', (req, res) => {
  db.retrieveAllWishes()
    .then(wishes => res.status(200).json({
      okay: true,
      wishes
    }))
    .catch(err => res.status(500).json({
      ok: false,
      error: err.message
    }))
})

router.post('/', (req, res) => {
  if (req.body.content) {
    const { content, stars, child_id } = req.body
    const newWish = {
      content,
      stars,
      child_id
    }
    db.addWish(newWish)
      .then(() => {
        res.json({ Okay: true })
      })
      .catch((err) => res.json({ Okay: false, error: err.message }))
  } else {
    res.json({ Okay: false, error: 'Content is required.' })
  }
})

module.exports = router
