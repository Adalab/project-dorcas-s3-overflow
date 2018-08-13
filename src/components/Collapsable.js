import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collapsable extends Component {

    render() {
        const {
            handleCollapsible,
            collapsibleClass,
        } = this.props

        return (
            <div className="colapsable colapsable">
                <div className={`form-fill  ${collapsibleClass}`}>
                    <div
                        className="container__rectangle_title_arrow colapsable-titulo" onClick={handleCollapsible}
                    >
                        <div className="container__rectangle_title">
                            <i className={`${this.props.icono} rectangle_2`}></i>
                            <legend className="form__title-principal titulo-colapsable">{this.props.seccion}</legend>
                        </div>
                        <div className="arrowup">
                            <i className="arrow-second arrow fas fa-angle-down turn-arrow" data-id="0"></i>
                        </div>
                    </div>
                    <div className="contenido-colapsable">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Collapsable.propTypes = {
        handleCollapsible: PropTypes.func.isRequired,
        collapsibleClass: PropTypes.string.isRequired,
};

export default Collapsable;
