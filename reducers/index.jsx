export default (state = {selectedMakeId: 0, selectedModelId: 0}, action) => {
  switch (action.type) {
    case 'GET_MODELS':
      const newState = {
        makes: state.makes,
        models: state.models,
        selectedMakeId: parseInt(action.makeId),
        selectedModelId: state.selectedModelId
      }
      return newState;
    case 'GET_MODEL':
      const newState1 = {
        makes: state.makes,
        models: state.models,
        selectedMakeId: state.selectedMakeId,
        selectedModelId: parseInt(action.modelId)
      }
      return newState1;
    case 'LOAD_MODEL_DETAIL':
      console.log(state);
      return state;
    default:
      return state
  }
}
