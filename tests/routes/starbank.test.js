const request = require('supertest')
const starbank = require('../../routes/starbank')

test('GET /starbank returns all stars from the starbank', () => {
  request(starbank)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.body).toHaveLength(5)
    })
})

test('returns a 200', () => {
  request(starbank)
    .get('/')
    .expect(200)
})
