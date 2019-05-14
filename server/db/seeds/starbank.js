exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('starbanks').del()
    .then(function () {
      // Inserts seed entries
      return knex('starbanks').insert([
        { id: 1, child_id: '1', stars: '50' },
        { id: 2, child_id: '2', stars: '50' },
        { id: 3, child_id: '3', stars: '50' },
        { id: 4, child_id: '4', stars: '50' },
        { id: 5, child_id: '5', stars: '50' }
      ])
    })
};
