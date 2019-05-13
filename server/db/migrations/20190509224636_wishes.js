exports.up = (knex, Promise) => {
  return knex.schema.createTable('wishes', (table) => {
    table.increments('id').primary()
    table.string('content')
    table.integer('stars').unsigned()
    table.integer('parents_id').references('parents.id')
    table.integer('child_id').references('child.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('wishes')
}
