exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishes').insert([
        { id: 1, content: 'lollipop', stars: 1, stars2: 0, child_id: 1 },
        { id: 2, content: 'finish reading', stars: 1, stars2: 0, child_id: 1 },
        { id: 3, content: 'lollipop', stars: 1, stars2: 0, child_id: 1 },
        { id: 4, content: 'finish reading', stars: 1, stars2: 0, child_id: 1 },
        { id: 5, content: 'lollipop', stars: 1, stars2: 0, child_id: 2 },
        { id: 6, content: 'finish reading', stars: 1, stars2: 0, child_id: 2 },
        { id: 7, content: 'lollipop', stars: 1, stars2: 0, child_id: 2 },
        { id: 8, content: 'finish reading', stars: 1, stars2: 0, child_id: 2 },
        { id: 9, content: 'lollipop', stars: 1, stars2: 0, child_id: 3 },
        { id: 10, content: 'finish reading', stars: 1, stars2: 0, child_id: 3 },
        { id: 11, content: 'lollipop', stars: 1, stars2: 0, child_id: 3 },
        { id: 12, content: 'finish reading', stars: 1, stars2: 0, child_id: 3 },
        { id: 13, content: 'lollipop', stars: 1, stars2: 0, child_id: 4 },
        { id: 14, content: 'finish reading', stars: 1, stars2: 0, child_id: 4 },
        { id: 15, content: 'lollipop', stars: 1, stars2: 0, child_id: 4 },
        { id: 16, content: 'finish reading', stars: 1, stars2: 0, child_id: 4 },
        { id: 17, content: 'finish reading', stars: 1, stars2: 0, child_id: 5 },
        { id: 18, content: 'finish reading', stars: 1, stars2: 0, child_id: 5 },
        { id: 19, content: 'finish reading', stars: 1, stars2: 0, child_id: 5 },
        { id: 20, content: 'finish reading', stars: 1, stars2: 0, child_id: 5 }
      ])
    })
}
