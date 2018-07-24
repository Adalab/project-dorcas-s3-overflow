import React, { Component, Fragment } from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Header/>
      <Main />
      <Footer/>
      </Fragment>
    );
  }
}


export default App;
