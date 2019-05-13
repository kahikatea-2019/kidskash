exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishes').insert([
        { id: 1, content: 'lollipop', stars: 1, parents_id: '1', child_id: '1' },
        { id: 2, content: 'finish reading', stars: 1, parents_id: '1', child_id: '1' },
        { id: 3, content: 'lollipop', stars: 1, parents_id: '2', child_id: '2' },
        { id: 4, content: 'finish reading', stars: 1, parents_id: '2', child_id: '2' }
      ])
    })
};
