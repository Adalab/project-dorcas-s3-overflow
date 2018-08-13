import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/awesome.svg'

class LandingMain extends Component {
    render() {
        return (
            <div className="landingbox">
                <img
                    className="logo"
                    src={logo}
                    alt="Awesome profile-card logo"
                />
                <h1 className="maintitle">Crea tu tarjeta de visita</h1>
                <p className="parraph1">
                    Crea mejores contactos profesionales de forma fácil y cómoda
			    </p>
                <div className="iconbox">
                    <span className="minibox">
                        <i className="fas fa-object-ungroup"></i>
                        <p className="minitext">Diseña</p>
                    </span>
                    <span className="minibox">
                        <i className="fas fa-keyboard margin"></i>
                        <p className="minitext">Rellena</p>
                    </span>
                    <span className="minibox">
                        <i className="fas fa-share-alt"></i>
                        <p className="minitext">Comparte</p>
                    </span>
                </div>
                <Link className="startbutt" to='/Page'>
                    COMENZAR
                </Link>
            </div>
        );
    }
}

export default LandingMain;
