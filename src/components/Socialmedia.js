import React, { Component, Fragment } from 'react';

class Socialmedia extends Component {
    render() {
        return (
            <Fragment>
                <a className="boton-red-social" href={this.props.url}>
                    <i className={this.props.icon}></i>
                </a>
            </Fragment>
        );
    }
}

export default Socialmedia;