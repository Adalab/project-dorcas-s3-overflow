import React, { Component, Fragment } from 'react';
import imageLogoBefore from '../images/before.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__link" alt="Logo awesome">
                    <img className="header__img" src={imageLogoBefore} alt="imagen logo awesome" />
                </div>
            </header>
        );
    }
}

export default Header;