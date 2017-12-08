export default (state = { selectedMakeId: 0, selectedModelId: 0 }, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        dataLoaded: true,
        makes: action.data.makes.data,
        models: action.data.models.data,
        carOfTheWeek: action.data.carOfTheWeek.data,
      }
    case 'GET_MODELS':
      return {
        dataLoaded: state.dataLoaded,
        makes: state.makes,
        models: state.models,
        carOfTheWeek: state.carOfTheWeek,
        selectedMakeId: parseInt(action.makeId),
        selectedModelId: state.selectedModelId
      };
    case 'GET_MODEL':
      return {
        dataLoaded: state.dataLoaded,
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
