import reducer from './index.jsx'

describe('reducer', () => {
    it('should handle initial state', () => {
        expect(
            reducer({}, '')
        ).toEqual({})
    })

    it('should handle GET_MODELS', () => {
        expect(
            reducer(
                { selectedMakeId: 0 }, 
                { type: 'GET_MODELS', makeId: 1 })
        ).toEqual({selectedMakeId: 1})
    })

    it('should handle GET_MODEL', () => {
        expect(
            reducer(
                { selectedModelId: 0 }, 
                { type: 'GET_MODEL', modelId: 1 })
        ).toEqual({selectedModelId: 1})
    })
})
