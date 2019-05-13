const testEnv = require('../../test-environment')
const db = require('../../../server/db/starbanks')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('retrieveAllStars gets all the stars', () => {
  const expected = 5
  return db.retrieveAllStars(testDb)
    .then(stars => {
      const actual = stars.length
      expected(actual).toBe(expected)
    })
    .catch(err => expected(err).toBeNull())
})
