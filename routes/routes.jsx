import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Layout from '../views/Layout.jsx';
import Index from '../views/Index.jsx';
import Search from '../views/Search.jsx';
import Model from '../views/Model.jsx';

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='search' component={Search} />
            <Route path="/make/model/:id" component={Model} />
        </Route>
    </Router>
);
