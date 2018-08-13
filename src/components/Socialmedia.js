import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Socialmedia extends Component {
    render() {
        const {
            url,
            icon,
        } = this.props

        return (
            <Fragment>
                <a
                    className="boton-red-social"
                    target="_blank"
                    href={url}>
                    <i className={icon}></i>
                </a>
            </Fragment>
        );
    }
}

Socialmedia.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,   
};

export default Socialmedia;