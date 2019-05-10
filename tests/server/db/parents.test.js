const env = require('./test-environment')
const db = require('../../../server/db/parents')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

testDb('getParents returns a list of all parents', () => {
  return db.getParents(testDb)
    .then(cohorts => {
      expect(cohorts.length).toBe(0)
    })
})
