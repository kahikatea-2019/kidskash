const env = require('../../test-environment')
const db = require('../../../server/db/children')

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getChildren returns a list of all children', () => {
  return db.retrieveAllChildren(testDb)
    .then(children => {
      expect(children.length).toBe(2)
    })
})
