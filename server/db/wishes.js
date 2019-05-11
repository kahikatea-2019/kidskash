const connection = require('./connection')

module.exports = {
  retrieveAllWishes,
  getWish
}

function retrieveAllWishes (db = connection) {
  return db('wishes')
    .select()
  console.log(retrieveAllWishes)
}

function getWish (id, db = connection) {
  return db('wishes')
    .where('id', id)
}
