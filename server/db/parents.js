const connection = require('./connection')

module.exports = {
  getParents
}

function getParents (db = connection) {
  return db('parents').select()
}
