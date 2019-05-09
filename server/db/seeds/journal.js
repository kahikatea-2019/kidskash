exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('journal').del()
    .then(function () {
      // Inserts seed entries
      return knex('journal').insert([
        { id: 1, content: 'nice job', parents_id: '1' },
        { id: 2, content: 'not finish the task', parents_id: '2' },
        { id: 3, content: 'terrible job', parents_id: '1' },
        { id: 4, content: 'thought they could hide a slice of ham under the bed', parents_id: '2' }
      ])
    })
};
