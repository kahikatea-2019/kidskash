const testEnv = require('../../test-environment')
const db = require('../../../server/db/wishes')

let testDb = null

beforeEach(() => {
    testDb = testEnv.getTestDb()
    return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getWishes get all wishes', () => {
    const expected = 4
    return db.getWishes(testDb)
    .then (wishes => {
        const actual = wishes.length
        expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getWish gets a single wish', () => {
    const expected = 'lollipop'
    return db.getWish(1, testDb)
    .then( wish => {
        const actual = wish.content 
        expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})