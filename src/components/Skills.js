import React, { Component } from 'react';

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

export default Skills;