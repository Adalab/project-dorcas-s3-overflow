import React, { Component, Fragment } from 'react';
import imageLogo from './images/after.svg';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="header__link" alt="Logo awesome">
                    <img class="header__img" src={imageLogo} alt="imagen logo awesome" />
                </div>
            </header>
        );
    }
}



export default Header;