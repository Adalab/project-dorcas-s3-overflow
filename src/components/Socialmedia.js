import React, { Component } from 'react';

class Socialmedia extends Component {
    render() {

        return (
            <div className="logos-container">
                <a className="boton-red-social " id="element-telefono" href="">
                    <i className="fas fa-mobile-alt logo-preview logo-fono"></i>
                </a>
                {/* <a class="boton-red-social email_button local--email" id="element-email" href="">
                    <i class="far fa-envelope logo-preview logo-carta"></i>
                </a>
                <a class="boton-red-social linkedin_button local--linkedin" id="element-linkedin" href="">
                    <i class="fab fa-linkedin-in logo-preview logo-in"></i>
                </a>
                <a class="boton-red-social github_button local--github" id="element-github" href="">
                    <i class="fab fa-github-alt logo-preview logo-github"></i>
                </a> */}
            </div>
        );
    }
}

export default Socialmedia;