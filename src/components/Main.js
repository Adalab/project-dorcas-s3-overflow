import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            skillSelect: [],
            optionSelected1: '',
            optionSelected2: '',
            optionSelected3: '',
            buttonIcon1: '+',
            buttonIcon2: '+',
            buttonIcon3: '+',

            collapsibleClassDesign: 'colapsable--visible',
            collapsibleClassFill: null,
            collapsibleClassShare: null,
            isHiddenDesign: true,
            isHiddenFill: false,
            isHiddenShare: false,

            twitterClass: 'action__hiddenField',
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

    componentWillMount() {
        localStorage.getItem('datos') && this.setState({
            data: JSON.parse(localStorage.getItem('datos'))

        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('datos', JSON.stringify(nextState.data));
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
            .then((response) => response.json())
            .then((jsonskills) => {
                this.setState({
                    skillOptions: jsonskills.skills
                }, this.pushSelect);
            });
    }

    handleRadioColor(event) {
        const { value } = event.target;
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                palette: value
            }
        }))
    }

    handleRadioTypography(event) {
        const { value } = event.target;
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                typography: value
            }
        }))
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


    pushSelect() {
        const copyArray = [...this.state.skillOptions]
        let array = ['Selecciona una', ...copyArray]
        this.setState({
            skillSelect: array
        })
    }

    // Skills handlers

    handleAbilitiesSelect1(event) {
        console.log('entro', event.target.value)
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
        if (this.state.buttonIcon1 === '+') {
            const array = [...this.state.data.skills]
            this.setState({
                data: {
                    ...this.state.data,
                    skills: [
                        this.state.optionSelected1, ...array.slice(1, 3)
                    ]
                }
            })
        } else {
            const array = [...this.state.data.skills]; // make a separate copy of the array
            array.splice(0, 1, '');
            this.setState({
                data: {
                    ...this.state.data,
                    skills: array
                }
            });
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
            const array = [...this.state.data.skills]
            this.setState({
                data: {
                    ...this.state.data,
                    skills: [array[0], this.state.optionSelected2, array[2]]
                }
            })
        } else {
            const array = [...this.state.data.skills]; // make a separate copy of the array
            array.splice(1, 1, '');
            this.setState({
                data: {
                    ...this.state.data,
                    skills: array
                }
            });
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
            const array = [...this.state.data.skills]
            this.setState({
                data: {
                    ...this.state.data,
                    skills: [array[0], array[1], this.state.optionSelected3]
                }
            })
        } else {
            const array = [...this.state.data.skills]; // make a separate copy of the array
            array.splice(2, 1, '');
            this.setState({
                data: {
                    ...this.state.data,
                    skills: array
                }
            });
        }
    }

    handleTwitter(event) {
        const twitterURL = this.state.url
        this.setState({
            twitter: `https://twitter.com/intent/tweet?url=${twitterURL}&text=Acabo%20de%20crear%20mi%20tarjeta%20con%20Font%20Awesome%20de%20OVERflow&hashtags=WomenInTech`
        })
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
                const cardURL = result.cardURL
                this.setState({ url: cardURL })
            })
            .then()
            .catch(function (error) {
                console.log(error);
            });
    }

    toggleHiddenDesing() {
        const collapsibleStatus = !this.state.isHiddenDesign
        this.setState({
            isHiddenDesign: collapsibleStatus
        }, () => {
            const collapsibleStatus = this.state.isHiddenDesign
            if (collapsibleStatus === true) {
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
        )
    }

    toggleHiddenRellena() {
        const collapsibleStatus = !this.state.isHiddenFill
        this.setState({
            isHiddenFill: collapsibleStatus
        }, () => {
            const collapsibleStatus = this.state.isHiddenFill
            if (collapsibleStatus === true) {
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
        )
    }

    toggleHiddenComparte() {
        const collapsibleStatus = !this.state.isHiddenShare
        this.setState({
            isHiddenShare: collapsibleStatus
        }, () => {
            const collapsibleStatus = this.state.isHiddenShare
            if (collapsibleStatus === true) {
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
        )
    }

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

    render() {
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
                    skillsOnCard={userInfo.skills}
                    paletteClass={paletteClass[userInfo.palette]}
                    typographyClass={fontClass[userInfo.typography]} />
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
                    skillOptions={this.state.skillSelect}
                    fileInput={this.fileInput}
                    photo={userInfo.photo}
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
                    twitterClass= {this.state.twitterClass}

                />
            </main>

        );
    }
}



export default Main;