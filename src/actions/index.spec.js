import * as actions from './index.jsx'

describe('actions tests', () => {
    it('getModels should create GET_MODELS action', () => {
        expect(actions.getModels(10)).toEqual({
            type: 'GET_MODELS',
            makeId: 10
        })
    })
    it('getModel should create GET_MODEL action', () => {
        expect(actions.getModel(10)).toEqual({
            type: 'GET_MODEL',
            modelId: 10
        })
    })
})
