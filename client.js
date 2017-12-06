const ReactDOM = require('react-dom');
const React = require('react');
const routes = require('./routes/routes.jsx');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
import reducer from './reducers/index.jsx';

const store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);
