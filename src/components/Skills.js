import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {
    render() {
        const {skillName} = this.props;

        return (
            <ul>
                {skillName.map((skill, i) =>
                    <li
                        key={i}
                        className="etiqueta-habilidad"
                    >
                        {skill}
                    </li>
                )}
            </ul>

        );
    }
}

Skills.propTypes = {
    skills: PropTypes.array
  
};

export default Skills;