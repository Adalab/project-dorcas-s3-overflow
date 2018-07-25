import React from 'react';
import logo from '../images/logo-adalab.png';

class Footer extends React.Component {

  render() {

    return (

      <footer className="footer">
        <a className="no_link_decoration footer__copiright" href="#">
          Tarjetas Martirio© 2018
            </a>
        <a className="footer__link-img-adalab" href="#">
          <img className="footer__img-adalab" src={logo} alt="Logo adalab" />
        </a>
      </footer>
    );
  }
}

export default Footer;