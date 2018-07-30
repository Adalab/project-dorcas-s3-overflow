import React, { Component, Fragment } from 'react';
import imageLogoAfter from '../images/after.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__link" alt="Logo awesome">
                    <img className="header__img" src={imageLogoAfter} alt="imagen logo awesome" />
                </div>
            </header>
        );
    }
}

export default Header;