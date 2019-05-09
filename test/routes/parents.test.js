const request = require('supertest')

const server = require('../../routes')

test('GET /parents returns all parents', () => {
  request(server)
    .get('/parents')
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})
