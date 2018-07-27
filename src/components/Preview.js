import React, { Component, Fragment } from 'react';
import martirioPic from '../images/martirio.jpg';
import Skills from './Skills.js';
import Socialmedia from './Socialmedia.js';

class Preview extends Component {
    render() {
        return (
            <div class="preview-container">
                <div class="margin-preview">
                    <div class="button-reset__container">
                        <a class="button-reset__link button-reset__title" href="#">
                            <i class=" far fa-trash-alt icono-basura">RESET</i>
                        </a>
                    </div>
                    <div class="preview">
                        <div class="preview_title">
                            <div class="preview-title__container">
                                <div class="color-line"></div>
                                <div class="container-name-profesion">
                                    <p class="name_line local--name" id="element-nombre">Martirio</p>
                                    <p class="profesion_line local--job" id="element-puesto">Reina de la canción</p>
                                </div>
                            </div>
                        </div>
                        <div class="photo-container">
                            <img class="changeImagePreview local--photo" src={martirioPic} alt="" />
                        </div>
                        <div class="footer-preview__container">

                            <div class="logos-container">
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
                            <div class="etiquetas-habilidades-container local local--skills">
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