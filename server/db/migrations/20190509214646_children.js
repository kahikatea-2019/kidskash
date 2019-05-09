exports.up = (knex, Promise) => {
    return knex.schema.createTable('children',(table) =>{
        table.integer('id').primary()
        table.string('child_name')
        table.string('display_URL')
        table.integer('parents_id').references('parents.id')
    })
  };
  
  exports.down = (knex, Promise) => {
      return knex.schema.dropTable('children')
    
  };





