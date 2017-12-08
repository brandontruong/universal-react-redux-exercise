import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchData } from '../api/index.jsx';
import { loadData } from '../actions/index.jsx';

class Layout extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        fetchData((data) => {
            this.props.dispatch(loadData(data))
        });
    }
    render() {
        const { custom } = this.props;
        return (
            <html>
                <head>
                    <title>Catalog</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="javascript:;">Car Catalog</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to='/'>Home <span className="sr-only">(current)</span></Link></li>
                            <li><Link to='/search' activeClassName="active">Search</Link></li>
                        </ul>
                        </div>
                    </nav>
                    <div>{this.props.children}</div>
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
}

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Layout);
