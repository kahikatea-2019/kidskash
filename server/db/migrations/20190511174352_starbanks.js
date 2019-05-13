exports.up = (knex, Promise) => {
  return knex.schema.createTable('starbanks', (table) => {
    table.increments('id').primary()
    table.integer('children_id').references('children.id')
    table.integer('stars')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('starbanks')
}
