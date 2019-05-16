exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishes').insert([
        { id: 1, content: 'Scarf', required_stars: 5, allocated_stars: 0, child_id: 1 },
        { id: 2, content: 'Ice Block', required_stars: 1, allocated_stars: 0, child_id: 1 },
        { id: 3, content: 'Go to the Museum', required_stars: 10, allocated_stars: 0, child_id: 1 },
        { id: 4, content: 'See Despicable Me VII', required_stars: 5, allocated_stars: 0, child_id: 2 },
        { id: 5, content: 'An Actual Tiger', required_stars: 50, allocated_stars: 0, child_id: 2 },
        { id: 6, content: 'A Whole Library', required_stars: 77, allocated_stars: 0, child_id: 2 },
        { id: 7, content: 'Skipping Rope', required_stars: 5, allocated_stars: 0, child_id: 3 },
        { id: 8, content: 'Sick Kicks', required_stars: 20, allocated_stars: 0, child_id: 3 },
        { id: 9, content: 'Ice-skating!', required_stars: 8, allocated_stars: 0, child_id: 3 },
        { id: 10, content: 'Cactus', required_stars: 12, allocated_stars: 0, child_id: 4 },
        { id: 11, content: 'Roller-Skating', required_stars: 4, allocated_stars: 0, child_id: 4 },
        { id: 12, content: 'Polar Bear', required_stars: 100, allocated_stars: 0, child_id: 4 },
        { id: 13, content: 'Origami', required_stars: 3, allocated_stars: 0, child_id: 5 },
        { id: 14, content: 'My first Camera!', required_stars: 45, allocated_stars: 0, child_id: 5 },
        { id: 15, content: 'A Watch', required_stars: 32, allocated_stars: 0, child_id: 5 }
      ])
    })
}
