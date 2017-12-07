const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
const makes = require('../data/makes.json');
const models = require('../data/models.json');
const carOfTheWeek = require('../data/carOfTheWeek.json');
import reducer from '../reducers/index.jsx';

router.get('*', function(request, response) {
    const initialState = { makes, models, carOfTheWeek };
    const store = Redux.createStore(reducer, 
        initialState);
        
    ReactRouter.match({
        routes: require('./routes.jsx'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <ReactRouter.RouterContext {...renderProps} />
                </Provider>
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;
