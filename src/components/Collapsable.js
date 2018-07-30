import React, { Component, Fragment } from 'react';


class Collapsable extends Component{

    render(){

        return(
            <div className="colapsable colapsable">
                <div className="form-fill colapsable--visible">
                    <div className="container__rectangle_title_arrow colapsable-titulo">
                        <div className="container__rectangle_title">
                        <i className={`${this.props.icono} rectangle_2`}></i>
                        <legend className="form__title-principal titulo-colapsable">{this.props.seccion}</legend>
                        </div>
                        <div className="arrowup">
                        <i className="arrow-second arrow fas fa-angle-down turn-arrow" data-id="0"></i>
                        </div>
                    </div>
                    <div className="contenido-colapsable">
                    
                    { this.props.children }
                    </div>
                    
                </div>
            </div>
        );
    }


} 

export default Collapsable;

