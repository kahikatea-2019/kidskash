const connection = require('./connection')

module.exports = {
  retrieveAllWishes,
  getWish,
  addWish,
  getWishes,
  updateStarsInWish,
  deleteWish
}

function retrieveAllWishes (db = connection) {
  return db('wishes')
    .select()
}

function getWish (id, db = connection) {
  return db('wishes')
    .where('id', id)
}

function addWish (newWish, db = connection) {
  return db('wishes')
    .insert(newWish)
}

function updateStarsInWish (wishId, newAllocated, db = connection) {
  return db('wishes')
    .where('id', wishId)
    .update('allocated_stars', newAllocated)
}

function getWishes () {
  JSON.parse(localStorage.getwish('_eda_items') || '[]')
}

function deleteWish (id) {
  const wishes = JSON.parse(localStorage.getWish('_eda_wishes'))
  localStorage.setWish('_eda_wishes', JSON.stringify(wishes.filter(wish => wish.id !== id)))
}
