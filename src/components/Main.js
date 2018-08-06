import React, { Component, Fragment } from 'react';
import Preview from './Preview.js';
import Formulario from './Formulario.js';
// mapeado de clases
const paletteClass = {
  "1": 'greenTarget',
  "2": 'redTarget',
  "3": 'greyTarget'
}

const fontClass = {
  "1": 'ubuntuFont',
  "2": 'comicFont',
  "3": 'montFont'
}

class Main extends Component {
  constructor() {
    super()

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

    // rellena inputs binds

    this.handleNameInput = this
      .handleNameInput
      .bind(this);
    this.handleJobInput = this
      .handleJobInput
      .bind(this);
    this.handleEmailInput = this
      .handleEmailInput
      .bind(this);
    this.handlePhoneInput = this
      .handlePhoneInput
      .bind(this);
    this.handleGithubInput = this
      .handleGithubInput
      .bind(this);
    this.handleLinkedinInput = this
      .handleLinkedinInput
      .bind(this);
    this.fileInput = React.createRef();
    this.handleAddImage = this
      .handleAddImage
      .bind(this);
    this.handleClickImage = this
      .handleClickImage
      .bind(this);

    this.getSkills();

    this.handleReset = this.handleReset.bind(this);

  }



  handleClickImage(event) {
    console.log(event.target.files)
    console.log(this.setState)
    const fr = new FileReader();
    fr.addEventListener('load', () => {
      this.setState({ image: fr.result });
    });
    fr.readAsDataURL(event.target.files[0]);

  }

  handleAbilities() {
    console.log('habilidad añadida')
  }

  // handle rellena inputs

  handleNameInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        name: event.target.value
      }
    })
  }

  handleJobInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        job: event.target.value
      }
    })
  }

  handleEmailInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value
      }
    })
  }

  handlePhoneInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        phone: event.target.value
      }
    })
  }

  handleGithubInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        github: event.target.value
      }
    })
  }

  handleLinkedinInput(event) {
    this.setState({
      data: {
        ...this.state.data,
        linkedin: event.target.value
      }
    })
  }

  // handle imagen load

  handleAddImage(event) {
    this
      .fileInput
      .current
      .click()
  }

  handleClickImage(event) {
    const fr = new FileReader();

    fr.addEventListener('load', () => {
      this.setState({
        data: {
          ...this.state.data,
          image: fr.result
        }
      })
    })

    fr.readAsDataURL(event.target.files[0]);

  }

  getSkills() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then((response) => response.json())
      .then((jsonskills) => {
        this.setState({
          skillOptions: jsonskills.skills
        });
      });
  }

  handleReset(event) {
    console.log('evento reset:', 'elemento clicado')

    this.setState({
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
    })

  }

  render() {
    console.log('skills', this.state.skills)
    const userInfo = this.state.data
    return (
      <main className="container-mediaqueries-preview">
        <Preview
          OnResetButton={this.handleReset}
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
      </main>

    );
  }
}

export default Main;