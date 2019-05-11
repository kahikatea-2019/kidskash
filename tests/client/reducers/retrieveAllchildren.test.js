import retrieveAllChildren from '../../../client/reducers/retrieveAllChildren'


test('reducer populates some initial state', () => {
    const newState = retrieveAllChildren(undefined, '@@INIT')
    expect(Array.isArray(newState.children)).toBeTruthy()
})

test('reducer returns current state when action does not match ', () => {
    const currentState = {
        children:['0','1','2','3']
    }
    const action = {
        type: 'RECEIVE_CHILDREN',
        children: currentState
    }
    const newState = retrieveAllChildren(currentState,action)

    expect(newState.children.length).toBe(4)
    expect(newState).toBe(currentState)
})

test('reducer handles RECEIVE_CHILDREN correctly ', () => {
    const currentState = {
        children:['0','1','2','3']
    }
    const action = {
        type: 'UNKNOWN_ACTION'
    }
    const newState = retrieveAllChildren(currentState,action)
    expect(newState).toBe(currentState)
})