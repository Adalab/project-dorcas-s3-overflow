import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {
    render() {
        const skills = this.props;
        return (
            <p className="etiqueta-habilidad">{skills.skillName}</p>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.array
  
};

export default Skills;