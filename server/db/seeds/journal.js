exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        {id: 1, content: 'nice job', parents_id: '1'},
        {id: 2, username: 'not finish the task', parents_id: '2'}
      ]);
    });
};