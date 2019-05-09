exports.up = (knex, Promise) => {
    return knex.schema.createTable('wishes',(table) =>{
        table.inincrements('id').primary()
        table.string('content')
        table.integer('stars').unsigned()
        table.integer('parents_id').references('parents.id')
        table.integer('children_id').references('children.id')
    })
  };
  
  exports.down = (knex, Promise) => {
      return knex.schema.dropTable('wishes')
  };
