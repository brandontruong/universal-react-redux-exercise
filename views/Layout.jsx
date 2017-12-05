import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
        console.log('Layout constructor');
    }
    _handleClick() {
        alert(this.props.custom.title);
    }
    render() {
        const { custom } = this.props;
        return (
            <html>
                <head>
                    <title>{custom.title}</title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    {/* <h1>{custom.title}</h1>
                    <p>Isn't server-side rendering remarkable?</p>
                    <button onClick={this._handleClick}>Click Me</button> */}
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
