import React, { Component, Fragment } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Preview from './components/Preview.js';
import Formulario from './components/Formulario.js';
import './Main.css';

class Main extends Component {
  render() {
    const { userInfo } = this.props
    return (
      <Fragment>
      <Header/>
      <main className= "container-mediaqueries-preview">
      <Preview 
        // userInfoPreview={userInfo}
        name={userInfo.name}
        job={userInfo.job}
        email={userInfo.email}
        phone={userInfo.phone}
        github={userInfo.github}
        linkedin={userInfo.linkedin}
        photo={userInfo.photo}
        skills={userInfo.skills}
        // palette: "2",
        // typography: "1"
        /> 
      <Formulario/>
      </main>
      <Footer/> 
      </Fragment>
    );
  }
}


export default Main;
