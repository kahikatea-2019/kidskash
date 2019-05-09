exports.up = (knex, Promise) => {
  return knex.schema.createTable('journal', (table) => {
    table.increments('id').primary()
    table.string('content')
    table.integer('parents_id').references('parents.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('journal')
}
