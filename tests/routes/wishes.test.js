const request = require('supertest')
const wishes = require('../../routes/wishes')


test('list 4 wishes', () =>{
    request(wishes)
    .get('/wishes')
    .expect(200)
    .end((err,res) => {
        expect(err).toBeNull()
        expect(res.body).toHaveLength(4)
        expect(res.body.content).toBe('lollipop')
        expect(res.text).toMatch('lollipop')
    })
})

test('returns a 404 for /foo', () => {
    request(wishes)
      .get('/foo')
      .expect(404)
      .end((err, res) => {
        expect(err).toBeNull()
      })
  })