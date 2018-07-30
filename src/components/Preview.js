import React, { Component, Fragment } from 'react';
import martirioPic from '../images/martirio.jpg';
import Skills from './Skills.js';

class Preview extends Component {
    constructor(){
        super()
    }
    
    handleReset(){
        console.log('elemento clicado')
    }
    
    render() {
        return (
            <div className="preview-container">
                <div className="margin-preview">
                    <div className="button-reset__container" onClick={this.handleReset}>
                        <a className="button-reset__link button-reset__title" href="#">
                            <i className=" far fa-trash-alt icono-basura">RESET</i>
                        </a>
                    </div>
                    <div className="preview">
                        <div className="preview_title">
                            <div className="preview-title__container">
                                <div className="color-line"></div>
                                <div className="container-name-profesion">
                                    <p className="name_line local--name" id="element-nombre">Martirio</p>
                                    <p className="profesion_line local--job" id="element-puesto">Reina de la canción</p>
                                </div>
                            </div>
                        </div>
                        <div className="photo-container">
                            <img className="changeImagePreview local--photo" src={martirioPic} alt="" />
                        </div>
                        <div className="footer-preview__container">
                            <div className="logos-container">
                                <a className="boton-red-social tfn_button phone_button local--phone" id="element-telefono" href="">
                                    <i className="fas fa-mobile-alt logo-preview logo-fono"></i>
                                </a>
                                <a className="boton-red-social email_button local--email" id="element-email" href="">
                                    <i className="far fa-envelope logo-preview logo-carta"></i>
                                </a>
                                <a className="boton-red-social linkedin_button local--linkedin" id="element-linkedin" href="">
                                    <i className="fab fa-linkedin-in logo-preview logo-in"></i>
                                </a>
                                <a className="boton-red-social github_button local--github" id="element-github" href="">
                                    <i className="fab fa-github-alt logo-preview logo-github"></i>
                                </a>
                            </div>
                            <div className="footer-preview__container">
                                <div className="logos-container">
                                    <a className="boton-red-social tfn_button phone_button local--phone" id="element-telefono" href="">
                                        <i className="fas fa-mobile-alt logo-preview logo-fono"></i>
                                    </a>
                                    <a className="boton-red-social email_button local--email" id="element-email" href="">
                                        <i className="far fa-envelope logo-preview logo-carta"></i>
                                    </a>
                                    <a className="boton-red-social linkedin_button local--linkedin" id="element-linkedin" href="">
                                        <i className="fab fa-linkedin-in logo-preview logo-in"></i>
                                    </a>
                                    <a className="boton-red-social github_button local--github" id="element-github" href="">
                                        <i className="fab fa-github-alt logo-preview logo-github"></i>
                                    </a>
                                </div>
                                <div className="etiquetas-habilidades-container local local--skills">
                                    <Skills skillName='HTML' />
                                    <Skills skillName='CSS' />
                                    <Skills skillName='GULP' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preview;