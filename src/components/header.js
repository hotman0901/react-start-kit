import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { children } = this.props;
        return (
            <>
                <div className="wrapper-row index">
                    <Link to="/todo">todo</Link>
                    <Link to="/page2">page2</Link>
                    <Link to="/page3">page3</Link>
                </div>
                <div>{children}</div>
            </>
        );
    }
}

Header.defaultProps = {
    children: {},
};

Header.propTypes = {
    children: PropTypes.object,
};
