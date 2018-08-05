import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import martirioPic from '../images/martirio.jpg';
import Skills from './Skills.js';
import Socialmedia from './Socialmedia.js';

class Preview extends Component {
    constructor(){
        super()
    }
    
    handleReset(){
        console.log('elemento clicado')
    }
    
    render() {
        const { 
            name,
            job, 
            email,
            phone,
            github,
            linkedin,
            photo,
            skills,
            paletteClass,
            typographyClass
        } = this.props
        console.log(this.props.paletteClass)
        return (
        
            <div className={`preview-container ${paletteClass} ${typographyClass}`}>
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
                                    <p className="name_line" id="element-nombre">{name || "Martirio"}</p>
                                    <p className="profesion_line" id="element-puesto">{job}</p>
                                </div>
                            </div>
                        </div>
                        <div className="photo-container">
                            <img className="changeImagePreview" src={photo} alt="" />
                        </div>
                        <div className="footer-preview__container">
                            <div className="logos-container">
                                <Socialmedia 
                                url={`tel: +34 ${phone}`}
                                icon={`fas fa-mobile-alt logo-preview`}
                                />
                                <Socialmedia 
                                url={`mailto:${email}`}
                                icon={`far fa-envelope logo-preview`}
                                />
                                <Socialmedia 
                                url={`https://www.linkedin.com/${linkedin}`}
                                icon={`fab fa-linkedin-in logo-preview`}
                                />
                                <Socialmedia 
                                url={`https://github.com/${github}`}
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

Preview.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    photo: PropTypes.string,
    skills: PropTypes.array,
    paletteClass: PropTypes.string,
    typographyClass: PropTypes.string
};

export default Preview;