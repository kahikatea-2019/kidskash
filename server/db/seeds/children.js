exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        { id: 1, child_name: 'Amy', display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg', parents_id: '1' },
        { id: 2, child_name: 'Bambam', display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg', parents_id: '1' },
        { id: 3, child_name: 'Dani', display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg', parents_id: '1' },
        { id: 4, child_name: 'Ete', display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg', parents_id: '1' },
        { id: 5, child_name: 'Philip', display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg', parents_id: '2' }
      ])
    })
};
