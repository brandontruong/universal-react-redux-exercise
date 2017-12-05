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

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='search' component={Search} />
            {/* <Route exact path="/make/model/:id" render={renderModel} /> */}
        </Route>
    </Router>
);
