
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, content: 'wash dishes' , stars : '3', parents_id: '1'},
        {id: 2, content: 'finish reading' , stars : '4', parents_id: '1'},
        {id: 1, content: 'wash dishes' , stars : '3', parents_id: '2'},
        {id: 2, content: 'finish reading' , stars : '4', parents_id: '2'}
      ]);
    });
};
