exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('starbanks').del()
      .then(function () {
        // Inserts seed entries
        return knex('starbanks').insert([
          { id: 1, child_id: 1, boxed_stars: 50 },
          { id: 2, child_id: 2, boxed_stars: 50 },
          { id: 3, child_id: 3, boxed_stars: 50 },
          { id: 4, child_id: 4, boxed_stars: 50 },
          { id: 5, child_id: 5, boxed_stars: 50 }
        ])
      })
  }
  