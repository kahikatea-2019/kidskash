exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishes').insert([
        {id: 1, content: 'lollipo' , stars : '', parents_id: '1', children_id: '1' },
        {id: 2, content: 'finish reading' , stars : '', parents_id: '1', children_id: '1' },
        {id: 1, content: 'lollipo' , stars : '', parents_id: '2', children_id: '2' },
        {id: 2, content: 'finish reading' , stars : '', parents_id: '2', children_id: '2' }
      ]);
    });
};
