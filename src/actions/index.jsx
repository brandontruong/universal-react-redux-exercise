export const loadData = (data) => ({
    type: 'LOAD_DATA',
    data
})

export const getModels = (makeId) => ({
    type: 'GET_MODELS',
    makeId
})

export const getModel = (modelId) => ({
    type: 'GET_MODEL',
    modelId
})