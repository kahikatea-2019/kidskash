const request = require('supertest')
const starbanks = require('../../routes/starbanks')

test('GET /starbank returns all stars from the starbansk', () => {
  request(starbanks)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.body).toHaveLength(5)
    })
})

test('returns a 200', () => {
  request(starbanks)
    .get('/')
    .expect(200)
})
