exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks',(table) =>{
      table.increments('id').primary()
      table.string('content')
      table.integer('stars')
      table.integer('parents_id').references('parents.id')

  })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tasks')
  
};
