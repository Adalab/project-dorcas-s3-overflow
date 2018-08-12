import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import './Page.css';


class Page extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default Page;