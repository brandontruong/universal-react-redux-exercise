
import axios from 'axios';
function fetchMakes() {
    return axios.get('/api/getmakes');
}
function fetchModels() {
    return axios.get('/api/getmodels');
}
function fetchCarOfTheWeek() {
    return axios.get('/api/carOfTheWeek');
}
export const fetchData = (callback) => {
      
    axios.all([fetchMakes(), fetchModels(), fetchCarOfTheWeek()])
        .then(axios.spread(function (makes, models, carOfTheWeek) {
        callback({makes, models, carOfTheWeek});
    }));
}