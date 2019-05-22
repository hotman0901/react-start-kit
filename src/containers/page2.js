import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page2 extends Component {
    render() {
        return (
            <div className="wrapper-col index">
                <Link to="/todo">todo</Link>
                <h1>Page2</h1>
            </div>
        );
    }
}
