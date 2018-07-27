import React, { Component, Fragment } from 'react';
import martirioPic from '../images/martirio.jpg';
import Skills from './Skills.js';
import Socialmedia from './Socialmedia.js';

class Preview extends Component {
    render() {
        console.log(this.props.userInfo)
        return (
            <div className="preview-container">
                <div className="margin-preview">
                    <div className="button-reset__container">
                        <a className="button-reset__link button-reset__title" href="#">
                            <i className=" far fa-trash-alt icono-basura">RESET</i>
                        </a>
                    </div>
                    <div className="preview">
                        <div className="preview_title">
                            <div className="preview-title__container">
                                <div className="color-line"></div>
                                <div className="container-name-profesion">
                                    <p className="name_line" id="element-nombre">Martirio</p>
                                    <p className="profesion_line" id="element-puesto">Reina de la canción</p>
                                </div>
                            </div>
                        </div>
                        <div className="photo-container">
                            <img className="changeImagePreview" src={martirioPic} alt="" />
                        </div>
                        <div className="footer-preview__container">
                            <div className="logos-container">
                                <Socialmedia 
                                url="pondremos el protocolo más la url como una var de js"
                                icon={`fas fa-mobile-alt logo-preview`}
                                />
                                <Socialmedia 
                                url="pondremos el protocolo más la url como una var de js"
                                icon={`far fa-envelope logo-preview`}
                                />
                                <Socialmedia 
                                url="pondremos el protocolo más la url como una var de js"
                                icon={`fab fa-linkedin-in logo-preview`}
                                />
                                <Socialmedia 
                                url="pondremos el protocolo más la url como una var de js"
                                icon={`fab fa-github-alt logo-preview`}
                                />
                            </div>
                            <div className="etiquetas-habilidades-container">
                                <Skills skillName='HTML' />
                                <Skills skillName='CSS' />
                                <Skills skillName='GULP' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Preview;