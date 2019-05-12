const connection = require('./connection')

module.exports = {
  retrieveAllWishes,
  getWish,
  addWish
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

function addWish (id,wish, db = connection) {
  return db('wishes')
    .where('id', id)
    .insert('content', wish.content)
}

