const path = require('path')
const express = require('express')

const server = express()
const wishesRoute = require('../routes/wishes')

const children = require('../routes/children')

server.use(express.static(path.join(__dirname, './public')))
server.use(express.json())
server.use('/wishes',wishesRoute)

server.use('/v1/children', children)

server.get('*', (req, res) => {
  // res.send('hello world')
  res.sendFile(path.join(__dirname, 'public/index.html'))
})


module.exports = server
