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
  return db.retrieveAllStarBanks(testDb)
    .then(stars => {
      const actual = stars.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
