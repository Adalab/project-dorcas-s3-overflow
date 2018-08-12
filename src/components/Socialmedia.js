import React, { Component, Fragment } from 'react';

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

export default Socialmedia;