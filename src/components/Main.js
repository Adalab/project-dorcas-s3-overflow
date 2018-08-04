import React, { Component, Fragment } from 'react';
import Preview from './Preview.js';
import Formulario from './Formulario.js';
import './Main.css';

class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        job: '',
        image: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        skills: [],
        palette: '',
        typography: ''
      },

      skillOptions: []
    }
  }
  render() {
    return (
      <Fragment>
        <Preview
          name={userInfo.name}
          job={userInfo.job}
          email={userInfo.email}
          phone={userInfo.phone}
          github={userInfo.github}
          linkedin={userInfo.linkedin}
          photo={userInfo.photo}
          skills={userInfo.skills}
          paletteClass={paletteClass[userInfo.palette]}
          typographyClass={fontClass[userInfo.typography]}
        />
        <Formulario
          userInfo={this.state.data}
          onInputNameChange={this.handleNameInput}
          onInputJobChange={this.handleJobInput}
          onInputEmailChange={this.handleEmailInput}
          onInputPhoneChange={this.handlePhoneInput}
          onInputGitChange={this.handleGithubInput}
          onInputLinkedinChange={this.handleLinkedinInput}
          skillOptions={this.state.skillOptions}
        />
      </Fragment>
    );
  }
}

export default ;
