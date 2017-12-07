import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends Component {
    constructor() {
        super();
    }
    render() {
        const { custom } = this.props;
        return (
            <html>
                <head>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/search'>Search</Link>
                        </li>
                    </ul>
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
