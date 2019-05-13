const path = require('path')
const express = require('express')

const server = express()

const wishes = require('../routes/wishes')
const children = require('../routes/children')
const starbanks = require('../routes/starbanks')

server.use(express.static(path.join(__dirname, './public')))
server.use(express.json())

server.use('/v1/wishes', wishes)
server.use('/v1/children', children)
server.use('/v1/starbanks', starbanks)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
