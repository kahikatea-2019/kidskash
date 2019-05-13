const connection = require('./connection')

module.exports = {
  retrieveAllStarBanks
}

function retrieveAllStarBanks (db = connection) {
  return db('starbanks')
    .select()
}
