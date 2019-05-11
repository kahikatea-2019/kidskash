exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        { id: 1, child_name: 'Amy', display_url: '', parents_id: '1' },
        { id: 2, child_name: 'Bambam', display_url: '', parents_id: '1' },
        { id: 3, child_name: 'Dani', display_url: '', parents_id: '1' },
        { id: 4, child_name: 'Ete', display_url: '', parents_id: '1' },
        { id: 5, child_name: 'Philip', display_url: '', parents_id: '2' }
      ])
    })
};
