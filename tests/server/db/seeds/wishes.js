exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishes').insert([
        { id: 1, content: 'Scarf', required_stars: 10, allocated_stars: 0, child_id: 1 },
        { id: 2, content: 'Ice Block', required_stars: 2, allocated_stars: 0, child_id: 1 },
        { id: 3, content: 'Go to the Museum', required_stars: 5, allocated_stars: 0, child_id: 1 },
        { id: 4, content: 'Throwing Knives', required_stars: 50, allocated_stars: 0, child_id: 1 },
        { id: 5, content: 'Take me to the Zoo!', required_stars: 10, allocated_stars: 0, child_id: 2 },
        { id: 6, content: 'See Despicable Me', required_stars: 10, allocated_stars: 0, child_id: 2 },
        { id: 7, content: 'An Actual Tiger', required_stars: 10, allocated_stars: 0, child_id: 2 },
        { id: 8, content: 'A Whole Library', required_stars: 10, allocated_stars: 0, child_id: 2 },
        { id: 9, content: 'Skipping Rope', required_stars: 10, allocated_stars: 0, child_id: 3 },
        { id: 10, content: 'Tattoo', required_stars: 10, allocated_stars: 0, child_id: 3 },
        { id: 11, content: 'Sick Kicks', required_stars: 10, allocated_stars: 0, child_id: 3 },
        { id: 12, content: 'Ice-skating!', required_stars: 10, allocated_stars: 0, child_id: 3 },
        { id: 13, content: 'Cactus', required_stars: 10, allocated_stars: 0, child_id: 4 },
        { id: 14, content: 'Hen-House', required_stars: 10, allocated_stars: 0, child_id: 4 },
        { id: 15, content: 'Roller-Skating', required_stars: 10, allocated_stars: 0, child_id: 4 },
        { id: 16, content: 'Polar Bear', required_stars: 10, allocated_stars: 0, child_id: 4 },
        { id: 17, content: 'Origami', required_stars: 10, allocated_stars: 0, child_id: 5 },
        { id: 18, content: 'My first Camera!', required_stars: 70, allocated_stars: 0, child_id: 5 },
        { id: 19, content: 'A Watch', required_stars: 10, allocated_stars: 0, child_id: 5 },
        { id: 20, content: 'A Horse', required_stars: 10, allocated_stars: 0, child_id: 5 }
      ])
    })
}
