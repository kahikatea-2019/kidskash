exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('starbank').del()
    .then(function () {
      // Inserts seed entries
      return knex('starbank').insert([
        { id: 1, children_id: '1', stars: '50' },
        { id: 2, children_id: '2', stars: '50' },
        { id: 3, children_id: '3', stars: '50' },
        { id: 4, children_id: '4', stars: '50' },
        { id: 5, children_id: '5', stars: '50' }
      ])
    })
};
