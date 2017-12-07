export default (state = { selectedMakeId: 0, selectedModelId: 0 }, action) => {
  switch (action.type) {
    case 'GET_MODELS':
      return {
        makes: state.makes,
        models: state.models,
        carOfTheWeek: state.carOfTheWeek,
        selectedMakeId: parseInt(action.makeId),
        selectedModelId: state.selectedModelId
      };
    case 'GET_MODEL':
      return {
        makes: state.makes,
        models: state.models,
        carOfTheWeek: state.carOfTheWeek,
        selectedMakeId: state.selectedMakeId,
        selectedModelId: parseInt(action.modelId)
      };
    default:
      return state;
  }
}
