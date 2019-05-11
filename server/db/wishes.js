const connection = require('./connection')

module.exports ={
   getWishes,
   getWish
}

function getWishes ( db = connection ) {
    return db('wishes')
    .select ()
    console.log(getWishes)
}

function getWish (id, db = connection){
    return db ('wishes')
    .where('id', id)
}
