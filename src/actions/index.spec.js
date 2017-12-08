import * as actions from './index.jsx'

describe('actions tests', () => {
    it('loadData should create LOAD_DATA action', () => {
        expect(actions.loadData(0)).toEqual({
            type: 'LOAD_DATA',
            data: 0
        })
    })
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
