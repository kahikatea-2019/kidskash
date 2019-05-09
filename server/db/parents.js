const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfiles')[environment]
const connection = require('knex')(config)

module.exports = {
  getParents
}

function getParents (db = connection) {
  return db('parents').select
}