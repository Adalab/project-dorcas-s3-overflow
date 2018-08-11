import React, {Component, Fragment} from 'react';
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
                photo: '',
                email: '',
                phone: '',
                github: '',
                linkedin: '',
                palette: '',
                typography: '',
                skills: ['HTML', 'CSS', 'JavaScript']
            },
            url: '',

            skillOptions: [],
            optionSelected1: '',
            optionSelected2: '',
            optionSelected3: '',
            buttonIcon1: '+',
            buttonIcon2: '+',
            buttonIcon3: '+',
  
            collapsibleClassDesign:'colapsable--visible',
            collapsibleClassFill: null,
            collapsibleClassShare: null,
            isHiddenDesign: true,
            isHiddenFill: false,
            isHiddenShare: false,

            twitter: '',
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
        this.handleAbilitiesButton1 = this
            .handleAbilitiesButton1
            .bind(this);
        this.handleAbilitiesButton2 = this
            .handleAbilitiesButton2
            .bind(this);
        this.handleAbilitiesButton3 = this
            .handleAbilitiesButton3
            .bind(this);
        this.handleAbilitiesSelect1 = this
            .handleAbilitiesSelect1
            .bind(this);
        this.handleAbilitiesSelect2 = this
            .handleAbilitiesSelect2
            .bind(this);
        this.handleAbilitiesSelect3 = this
            .handleAbilitiesSelect3
            .bind(this);
        this.handleReset = this
            .handleReset
            .bind(this);
        this.handleRadioColor = this
            .handleRadioColor
            .bind(this);
        this.handleRadioTypography = this
            .handleRadioTypography
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
            this.handleTwitter = this.handleTwitter.bind(this);
        this.toggleHiddenDesing = this
            .toggleHiddenDesing
            .bind(this);
        this.toggleHiddenRellena = this
            .toggleHiddenRellena
            .bind(this);
        this.toggleHiddenComparte = this
            .toggleHiddenComparte
            .bind(this);
    }
    handleRadioColor(event) {
        console.log(event.target.value)
        const {value} = event.target;
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                palette: value
            }
        }), () => {

            console.log(this.state.data.palette)

        })

    }

    handleRadioTypography(event) {
        console.log(event.target.value)
        const {value} = event.target;
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                typography: value
            }
        }), () => {

            console.log(this.state.data.typography)

        })

    }

    handleClickImage(event) {
        const fr = new FileReader();
        fr.addEventListener('load', () => {
            this.setState({photo: fr.result});
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
                    photo: fr.result
                }
            })
        })

        fr.readAsDataURL(event.target.files[0]);

    }

    //fetch to get skills
    componentDidMount() {
      fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
        .then((response) => response.json())
        .then((jsonskills) => {
          this.setState({
            skillOptions: jsonskills.skills
          }, this.pushSelect);
        });
    }
  
    pushSelect() {
      const copyArray = [...this.state.skillOptions]
      let array = ['Selecciona una', ...copyArray]
  
      this.setState({
        skillSelect: array
      })
    }
  
    // Skills handlers
  
    handleAbilitiesSelect1(event) {
      console.log(event.target.value)
      this.setState({
        optionSelected1: event.target.value,
      })
    }
  
    handleAbilitiesSelect2(event) {
      this.setState({
        optionSelected2: event.target.value,
      })
    }
  
    handleAbilitiesSelect3(event) {
      this.setState({
        optionSelected3: event.target.value,
      })
    }
  
    handleAbilitiesButton1(event) {
      event.preventDefault();
      // lógica para cambiar el signo del botón
      this.setState((prevState, props) => ({
        buttonIcon1: (prevState.buttonIcon1 === '+') ? '-' : '+'
      }));
      // lógica para añadir o quitar skills de la tarjeta
      if (this.state.buttonIcon1 === '+') {
        const array = [...this.state.skillsOnCard]
        this.setState({
          skillsOnCard: [this.state.optionSelected1, ...array.slice(1, 3)]
        })
      } else {
        const array = [...this.state.skillsOnCard]; // make a separate copy of the array
        array.splice(0, 1, '');
        this.setState({ skillsOnCard: array });
      }
    }
  
    handleAbilitiesButton2(event) {
      event.preventDefault();
      // lógica para cambiar el signo del botón
      this.setState((prevState, props) => ({
        buttonIcon2: (prevState.buttonIcon2 === '+') ? '-' : '+'
      }));
      // lógica para añadir o quitar skills de la tarjeta
      if (this.state.buttonIcon2 === '+') {
        const array = [...this.state.skillsOnCard]
        this.setState({
          skillsOnCard: [array[0], this.state.optionSelected2, array[2]]
        })
      } else {
        const array = [...this.state.skillsOnCard]; // make a separate copy of the array
        array.splice(1, 1, '');
        this.setState({ skillsOnCard: array });
      }
    }
  
    handleAbilitiesButton3(event) {
      event.preventDefault();
      // lógica para cambiar el signo del botón
      this.setState((prevState, props) => ({
        buttonIcon3: (prevState.buttonIcon3 === '+') ? '-' : '+'
      }));
      // lógica para añadir o quitar skills de la tarjeta
      if (this.state.buttonIcon3 === '+') {
        const array = [...this.state.skillsOnCard]
        this.setState({
          skillsOnCard: [array[0], array[1], this.state.optionSelected3]
        })
      } else {
        const array = [...this.state.skillsOnCard]; // make a separate copy of the array
        array.splice(2, 1, '');
        this.setState({ skillsOnCard: array });
      }
    }
  
    handleTwitter(event) {
      const twitterURL = this.state.url
      this.setState({
      twitter: `https://twitter.com/intent/tweet?url=${twitterURL}&text=Acabo%20de%20crear%20mi%20tarjeta%20con%20Font%20Awesome%20de%20OVERflow&hashtags=WomenInTech`
      })
  }

  handleReset(event) {
    event.preventDefault()

    this.setState({
      data: {
        name: '',
        job: '',
        image: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        palette: '1',
        typography: ''
      },

      optionSelected1: '',
      optionSelected2: '',
      optionSelected3: '',
      skillsOnCard: ['HTML', 'CSS', 'JavaScript'],
      buttonIcon1: '+',
      buttonIcon2: '+',
      buttonIcon3: '+',
    })
  }
  componentWillMount() {
    localStorage.getItem('datos') && this.setState({
      data: JSON.parse(localStorage.getItem('datos'))
    })}
    

    handleReset(event) {
        event.preventDefault()

        this.setState({
            data: {
                name: '',
                job: '',
                photo: '',
                email: '',
                phone: '',
                github: '',
                linkedin: '',
                palette: '',
                typography: '',
                skills: ['HTML', 'CSS', 'JavaScript']
            },

            optionSelected1: '',
            optionSelected2: '',
            optionSelected3: '',
            buttonIcon1: '+',
            buttonIcon2: '+',
            buttonIcon3: '+'
        })
    }
    componentWillMount() {
        localStorage.getItem('datos') && this.setState({
            data: JSON.parse(localStorage.getItem('datos'))

        })
    }

    componentWillUpdate(nextProps, nextState) {

        localStorage.setItem('datos', JSON.stringify(nextState.data));
    }

    handleSubmit(event) {

        event.preventDefault();
        console.log("data", this.state.data)
        const json = this.state.data;

        console.log("json", json)
        fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
            method: 'POST',
            body: JSON.stringify(json),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (resp) {
                return resp.json();
            })
            .then((result) => {

                this.setState({url: result.cardURL})

            })
            .catch(function (error) {
                console.log(error);
            });;

    }

    toggleHiddenDesing (){
      console.log("diseña")
      
      this.setState({
        isHiddenDesign: !this.state.isHiddenDesign
      })
      if (this.state.isHiddenDesign === true){
        this.setState({
          collapsibleClassDesign: 'colapsable--visible',
          collapsibleClassFill: '',
          collapsibleClassShare: '',
        })
      } else {
        this.setState({
          collapsibleClassDesign: ''
        })
      }
    }
    toggleHiddenRellena (){
      console.log("rellena")
      this.setState({
        isHiddenFill: !this.state.isHiddenFill
      })
      if (this.state.isHiddenFill === true){
        this.setState({
          collapsibleClassFill: 'colapsable--visible',
          collapsibleClassShare: '',
          collapsibleClassDesign: '',
        })
      } else {
        this.setState({
          collapsibleClassFill: ''
        })
      }
    }
    toggleHiddenComparte (){
      console.log("comparte")
      this.setState({
        isHiddenShare: !this.state.isHiddenShare
      })
      if (this.state.isHiddenShare === true){
        this.setState({
          collapsibleClassShare: 'colapsable--visible',
          collapsibleClassDesign: '',
          collapsibleClassFill: '',
        })
      } else {
        this.setState({
          collapsibleClassShare: ''
        })
      }
    }
  

    render() {
        const userInfo = this.state.data
        console.log("URL", this.state)
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
                    skillsOnCard={userInfo.skills}
                    paletteClass={paletteClass[userInfo.palette]}
                    typographyClass={fontClass[userInfo.typography]}/>
                <Formulario
                    onChangeRadioColor={this.handleRadioColor}
                    onChangeRadioTypography={this.handleRadioTypography}
                    userInfo={this.state.data}
                    onInputNameChange={this.handleNameInput}
                    onInputJobChange={this.handleJobInput}
                    onInputImageClick={this.handleAddImage}
                    onInputImageChange={this.handleClickImage}
                    onInputEmailChange={this.handleEmailInput}
                    onInputPhoneChange={this.handlePhoneInput}
                    onInputGitChange={this.handleGithubInput}
                    onInputLinkedinChange={this.handleLinkedinInput}
                    skillOptions={this.state.skillOptions}
                    fileInput={this.fileInput}
                    skillOptions={this.state.skillOptions}
                    handleAbilitiesButton1={this.handleAbilitiesButton1}
                    handleAbilitiesButton2={this.handleAbilitiesButton2}
                    handleAbilitiesButton3={this.handleAbilitiesButton3}
                    handleAbilitiesSelect1={this.handleAbilitiesSelect1}
                    handleAbilitiesSelect2={this.handleAbilitiesSelect2}
                    handleAbilitiesSelect3={this.handleAbilitiesSelect3}
                    buttonIcon1={this.state.buttonIcon1}
                    buttonIcon2={this.state.buttonIcon2}
                    buttonIcon3={this.state.buttonIcon3}
                    onSubmitkCreateCard={this.handleSubmit}
                    url={this.state.url}
                    twitterButtonHandler={this.handleTwitter}
                    twitterURL={this.state.twitter}
                    handleCollapsibleDesing={this.toggleHiddenDesing}
                    handleCollapsibleRellena={this.toggleHiddenRellena}
                    handleCollapsibleComparte={this.toggleHiddenComparte}
                    collapsibleClassDesign={this.state.collapsibleClassDesign}
                    collapsibleClassFill={this.state.collapsibleClassFill}
                    collapsibleClassShare={this.state.collapsibleClassShare}
                    isHiddenDesign={this.state.isHiddenDesign}
                    isHiddenFill={this.state.isHiddenFill}
                    isHiddenShare={this.state.isHiddenShare}

                    />
            </main>

        );
    }
}

Main.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    photo: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    skills: PropTypes.array,
    palette: PropTypes.string,
    typography: PropTypes.string,
    skillOptions: PropTypes.array,
    // nombre de los selects:PropTypes.array
};

export default Main;