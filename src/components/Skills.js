import React, { Component } from 'react';

class Skills extends Component {
  render() {
    const skills=this.props;
    return (
        <p class="etiqueta-habilidad">{skills.skillName}</p>
    );
  }
}

export default Skills;