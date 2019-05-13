const connection = require('./connection')

module.exports = {
  retrieveAllWishes,
  getWish
}

function retrieveAllWishes (db = connection) {
  return db('wishes')
    .select()
}

function getWish (id, db = connection) {
  return db('wishes')
    .where('id', id)
}
