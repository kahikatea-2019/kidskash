const connection = require('./connection')

module.exports = {
  retrieveAllStars
}

function retrieveAllStars (db = connection) {
  return db('starbank')
    .select()
}
