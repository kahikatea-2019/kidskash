const env = require('../../test-environment')
const db = require('../../../server/db/parents')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getParents returns a list of all parents', () => {
  return db.getParents(testDb)
    .then(parents => {
      expect(parents.length).toBe(2)
    })
})
