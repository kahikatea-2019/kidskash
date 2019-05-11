const connection = require('./connection')

module.exports = {
  getChildren
}

function getChildren (db = connection) {
  return db('children')
    .select()
}
