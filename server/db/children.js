const connection = require('./connection')

module.exports = {
  retrieveAllChildren
}

function retrieveAllChildren (db = connection) {
  return db('children')
    .select()
}
