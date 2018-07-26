import React, { Component, Fragment } from 'react';

class Socialmedia extends Component {
    render() {

        return (
            <Fragment>
                <a className="boton-red-social" href={this.props.url}>
                    <i className={this.props.icon}></i>
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
            </Fragment>
        );
    }
}

export default Socialmedia;