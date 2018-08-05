import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview.js';
import Formulario from './Formulario.js';
import '../scss/Main.css';

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
        skills: ['HTML'],
        palette: '',
        typography: ''
      },

      selectLogic: {
        skillOptions: [],
        optionSelected: '',
        buttonIcon: '+'
      }
    }

    // rellena inputs binds

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleJobInput = this.handleJobInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.handleGithubInput = this.handleGithubInput.bind(this);
    this.handleLinkedinInput = this.handleLinkedinInput.bind(this);
    this.fileInput = React.createRef();
    this.handleAddImage = this.handleAddImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.handleAbilitesButton = this.handleAbilitesButton.bind(this);
    this.handleAbilitiesSelect = this.handleAbilitiesSelect.bind(this);

    this.getSkills();
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

  // fetch to get skills

  getSkills() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then((response) => response.json())
      .then((jsonskills) => {
        this.setState({
          selectLogic:{
          ...this.state.selectLogic,
          skillOptions: jsonskills.skills}
        });
      });
  }

  // Skills handlers

  handleAbilitiesSelect(event) {
    this.setState({
      selectLogic: {
        optionSelected:
        [...this.state.selectLogic, event.target.value]
      }
    })
    console.log('funciono')
    console.log(this.state.selectLogic.optionSelected)
  }

  handleAbilitesButton(event) {
    event.preventDefault();

    this.setState((prevState, props) => ({
      buttonIcon: (prevState.buttonIcon === '+') ? '-' : '+'
    }));
    // creo que falla aquí
    if (this.state.selectLogic.buttonIcon === '+') {
      this.setState({
        selectLogic: {
          ...this.state.selectLogic,
          optionsOnCard: [...this.state.data.Skills, this.state.selectLogic.optionSelected]
        }
      })
    } else {
      const array = [...this.state.data.Skills]; // make a separate copy of the array
      const index = array.indexOf(event.target.value)
      array.splice(index, 1);
      this.setState({
        selectLogic: {
          ...this.state.selectLogic,
          optionsOnCard: array
        }
      });
    }
  }

  render() {
    console.log('skills', this.state.data.skills)
    const userInfo = this.state.data
    return (
      <Fragment>
        <Header />
        <main className="container-mediaqueries-preview">
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
            skillOptions={this.state.selectLogic.skillOptions}
            handleAbilitiesButton={this.handleAbilitiesButton}
            handleAbilitiesSelect={this.handleAbilitiesSelect}
            buttonIcon={this.state.selectLogic.buttonIcon}
          />
        </main>
        <Footer />
      </Fragment>
    );
  }
}


Main.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  skills: PropTypes.array,
  palette: PropTypes.string,
  typography: PropTypes.string,
  skillOptions: PropTypes.array,
  // nombre de los selects:PropTypes.array
};

export default Main;