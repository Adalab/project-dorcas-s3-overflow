import React, { Component, Fragment } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Preview from './components/Preview.js';
import Formulario from './components/Formulario.js';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
      <main className= "container-mediaqueries-preview">
      <Preview /> 
      <Formulario/>
      </main>
      <Footer/> 
      </Fragment>
    );
  }
}


export default Main;
