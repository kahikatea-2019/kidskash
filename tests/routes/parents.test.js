const request = require('supertest')

const server = require('../../routes/parents')

test('GET /parents returns all parents', () => {
  request(server)
    .get('/parents')
    .then(res => {
      expect(res.body).toHaveLength(2)
    })
})
