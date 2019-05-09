exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        { id: 1, child_name: 'Joni', display_url: '', parents_id: '1' },
        { id: 2, child_name: 'Jenny', display_url: '', parents_id: '2' }
      ])
    })
};
