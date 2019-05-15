exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        { id: 1, child_name: 'Amy', display_url: 'https://i.pinimg.com/originals/8d/41/5d/8d415d314c94e19b6893c2018d870cb1.png', parents_id: '1' },
        { id: 2, child_name: 'Bambam', display_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/87D5/production/_102637743_georgebday.jpg', parents_id: '1' },
        { id: 3, child_name: 'Dani', display_url: 'https://d1lhri34tovdcj.cloudfront.net/prod/mom365/babynames/istock-616904102-d80ff882-4a08-40f7-9066-87c1d00548bd.jpg', parents_id: '1' },
        { id: 4, child_name: 'Ete', display_url: 'https://i.pinimg.com/236x/2f/23/8f/2f238fc74fca41f033a951be342f8c2b--polynesian-people-girl-smile.jpg', parents_id: '1' },
        { id: 5, child_name: 'Philip', display_url: 'https://www.asianscientist.com/wp-content/uploads/2018/04/20180424-Asian-boy-glasses-playing-myopia-confused-shutterstock.jpg', parents_id: '2' }
      ])
    })
}