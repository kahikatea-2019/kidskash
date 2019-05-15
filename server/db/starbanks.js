const connection = require('./connection')

module.exports = {
  retrieveAllStarBanks,
  updateStarsInStarBank
}

function retrieveAllStarBanks (db = connection) {
  return db('starbanks')
    .select()
}

function updateStarsInStarBank (childId, newBoxed, db = connection) {
  return db('starbanks')
    .where('child_id', childId)
    .update('stars', newBoxed)
}
