const request = require('supertest')

const server = require('../../routes/children')

test('GET /children returns all children', () => {
  request(server)
    .get('/children')
    .then(res => {
      expect(res.body).toHaveLength(2)
    })
})
