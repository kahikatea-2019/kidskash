const enviroment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[enviroment]
const connection = require('knex')(config)

module.exports ={
    getWishes
}

function getWishes (id, db = connection) {
    return db('wishes')
    .join('children','children.id','wishes.children_id')
    .join('parents','parents.id','wishes.parents_id')
    .select('wishes.id','wishes.content','wishes.stars',
    'wishes.parents_id','wishes.children_id','children.id','parents.id')
}
