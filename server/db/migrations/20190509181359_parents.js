exports.up = (knex, Promise) => {
  return knex.schema.createTable('parents',(table) =>{
      table.increments('id').primary()
      table.string('username').unique()
      table.string('password')
  })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('parents')
};
