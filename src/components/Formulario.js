import React from 'react';
class Formulario extends React.Component {

    render() {
  
      return (
          
       <div className="container-izquierda">
        <div className="colapsable1 colapsable">
          <div className="form__fill" data-donde="0">
            <div className="container__rectangle_title_arrow colapsable-titulo">
              <div className="container__rectangle_title">
                <i className=" far fa-object-ungroup rectangle_2"></i>
                <legend className="form__title-principal titulo-colapsable">DISEÑA</legend>
              </div>
              <div className="arrowup">
                <i className="arrow-second arrow fas fa-angle-down turn-arrow" data-id="0"></i>
              </div>
            </div>
            <div className="contenido-colapsable">
              <form className="form" action="/signup" method="post">
  
  
  
                <fieldset className="fieldset-colors">
  
                  <div className="container-legend-label-input">
                    <legend className="form__subtitle">COLORES</legend>
                    <div className="container__input__labels">
                      <label className="container_input_div" for="form__subtitle__first-color">
  
                        <input className="clikable local--palette radio-color" data-donde="greenTarget" id="form__subtitle__first-color" type="radio"
                          value="1" name="palette" checked/>
  
                        <span className="checkmark"></span>
                        <div className="container__square">
                          <div className="first-color__square1"></div>
                          <div className="first-color__square2"></div>
                          <div className="first-color__square3"></div>
                        </div>
                      </label>
                      <label className="container_input_div" for="form__subtitle__second-color">
  
                        <input className="clikable local--palette radio-color" data-donde="redTarget" id="form__subtitle__second-color" type="radio"
                          value="2" name="palette" />
  
                        <span className="checkmark"></span>
                        <div className="container__square">
                          <div className="second-color__square1"></div>
                          <div className="second-color__square2"></div>
                          <div className="second-color__square3"></div>
                        </div>
                      </label>
                      <label className="container_input_div" for="form__subtitle__third-color">
  
                        <input className="clikable local--palette radio-color" data-donde="greyTarget" id="form__subtitle__third-color" type="radio"
                          value="3" name="palette" />
  
                        <span className="checkmark"></span>
                        <div className="container__square group-square2">
                          <div className="third-color__square1"></div>
                          <div className="third-color__square2"></div>
                          <div className="third-color__square3"></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </fieldset>
  
                {/*<div className="fieldset-font">
  
                  <div className="container-legend-label-input">
                    <legend className="form__subtitle">FUENTES</legend>
                    <div className="container__input__labels ">
                      <label className="font1 container_input_font container_input_div" for="form__subtitle__first-font">
  
                        <input className="clikable local--typography radio-font" data-donde="ubuntuFont" id="form__subtitle__first-font" type="radio"
                          value="1" name="typography" />
  
                        <span className="checkmark"></span>
                        <div className="container__font">
                          Ubuntu
                        </div>
                      </label>
                      <label className="font2 container_input_font container_input_div" for="form__subtitle__second-font">
  
                        <input className="clikable local--typography radio-font" data-donde="comicFont" id="form__subtitle__second-font" type="radio"
                          value="2" name="typography" checked/>
                        <span className="checkmark"></span>
                        <div className="container__font">
                          Comic Sans
                        </div>
                      </label>
                      <label className="font3 container_input_div" for="form__subtitle__third-font">
  
                        <input className="clikable local--typography radio-font" data-donde="montFont" id="form__subtitle__third-font" type="radio" value="3"
                          name="typography" />
  
                        <span className="checkmark"></span>
                        <div className="container__font">
                          Montserrat
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
  
            </div>
          </div>
        </div>
  
        <!-- rellena - Irene -->
        <div className="colapsable2 colapsable">
  
          <div className="form__fill" data-donde="1">
            <div className="contenedor-icono colapsable-titulo">
              <div className="container__rectangle_title">
                <i className="far fa-keyboard icono-teclado"></i>
                <h1 className="form__title">Rellena</h1>
              </div>
              <div className="arrowup__second-option">
                <i className="arrow-second arrow fas fa-angle-down turn-arrow" data-id="1"></i>
              </div>
            </div>
  
            <div className="contenido-colapsable">
              <div className="form__container">
                <!-- Campos JS -->
                <label className="form__label" for="nombre">Nombre completo</label>
                <input className="form__input form__input--nombre local--input--name" id="nombre" type="text" name="name" placeholder="Ej. Martirio" maxlength="19"
                  data-donde="element-nombre">
                <label className="form__label" for="puesto">Puesto</label>
                <input className="form__input form__input--puesto local--input--job" id="puesto" type="text" name="job" placeholder="Ej. Reina de la canción" maxlength="22"
                  data-donde="element-puesto">
  
                <label className="form__label">Imagen de perfil</label>
                <div className="form__container--imagen">
  
                  <div className="action form__container--imagen">
                    <button className="action__upload-btn boton__añadir-imagen" type="button">Añadir imagen</button>
                    <input type="file" name="photo" id="img-selector" className="action__hiddenField">
                  </div>
                  <div className="profile-image contenedor--imagen">
                    <img className="profile-image__item" src="https://image.flaticon.com/icons/png/512/16/16363.png" alt="Foto de perfil">
                  </div>
                </div>
  
                  <label className="form__label" for="email">Email</label>
                  <input className="form__input inputhref form__mail local--input--email" id="email" type="mail" name="email" placeholder="Ej. reinadelacancion@ole.es" data-donde="element-email" href="">
  
                <label className="form__label" for="telefono">Teléfono</label>
                <input className="form__input inputhref form__telefono local--input--phone" id="telefono" type="number" name="phone" placeholder="Ej. 982938437" data-donde="element-telefono">
                <label className="form__label " for="linkedin">Linkedin</label>
                <input className="form__input inputhref form__linkedin local--input--linkedin" id="linkedin" type="text" name="linkedin" placeholder="Ej. martirio.reina" data-donde="element-linkedin">
                <label className="form__label" for="github">Github</label>
                <input className="form__input inputhref form__github local--input--github" id="github" type="text" name="github" placeholder="Ej. martirio-reina" data-donde="element-github">
  
  <div className="form__container--habilidades">
                  <label className="form__label" for="habilidades">Habilidades (máximo 3)</label>
  
  
                </div>
              </div>
  
              <!-- SKILLS -->
              <div className="form__container--habilidad">
                <div id="mama">
                  <button type="button" id="fetch" className="button">
                    <div className="content-button-habilities"> + </div>
                  </button>
                </div>
                <!-- SKILLS -->
  
              </div>
            </div>
          </div>
        </div>
        <div className="colapsable3 colapsable">
  
          <div className="form__fill" data-donde="2">
            <div className="titleshare colapsable-titulo">
  
              <div className="icon__Third-title container__rectangle_title">
                <i className="icono-teclado fas fa-share-alt"></i>
                <h1 className="form_title3 titulo-colapsable">Comparte</h1>
              </div>
              <div className="arrowup__second-option">
                <i className="arrow-second arrow fas fa-angle-down turn-arrow" data-id="2"></i>
           </div>
            </div>
            <div className="contenido-colapsable">
              <div className="contenedor-boton">
                <a href="#" className="makecard submit" id="submit">&nbsp;&nbsp;CREAR TARJETA
                  <i className="far fa-address-card"></i>
                </a>
                <span className="rectangl2"></span>
              </div>
              <div className="contenedor-twitter">
                <h2 className="titletarjeta response parraphtarjeta"></h2>
  
                <a href="" className="maketwitter" target="_blank">&nbsp;&nbsp;Compartir en Twitter
                  <i className="fab fa-twitter"></i>
                </a>
                <span className="rectangl2"></span>
              </div>
            </div>
          </div>*/}
          </form>
        </div>
      </div>
      </div>
      </div>

     
        
      );
    }
  }
  export default Formulario;
  