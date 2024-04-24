import React from 'react';
import { Link } from "react-router-dom";
import '../../scss/landing.scss';
import logo from '../../images/logo.png';
import adoptar from '../../images/gatofeliz.png';
import acoger from '../../images/perro.png';
import voluntariado from '../../images/heart.png';
import perdidos from '../../images/sos.png';
import publicar from '../../images/publicar.png';


function Landing() {
  
  return (
    <div className="home-page-container homepage landing">
      <div className="landing__container">
        <img className="landing__container__logo" src={logo} alt="Logo" />
        <h1 className="landing__container__title">Perros y Gatos España</h1>
      </div>
      <div className="landing__container1">
        <p className="landing__container1__sentence">"Quien salva una vida salva al mundo entero"</p>
      </div>
      <div>
        <h2 className="landing__h2">¿Qué quieres hacer?</h2> 
      </div>
      <div className="landing__container2">
        <Link to="/Adopcion">
          <button className="landing__container2__button"><img className="landing__container2__img" src={adoptar} alt="adoptar" /><span className= "landing__container2__span">ADOPTAR</span></button>
        </Link>
        <Link to="/Acogida">
          <button className="landing__container2__button"><img className="landing__container2__img" src={acoger} alt="acoger" /><span className= "landing__container2__span">ACOGER</span></button>
        </Link>
        <Link to="/Voluntariado">
          <button className="landing__container2__button"><img className="landing__container2__img" src={voluntariado} alt="voluntariado" /><span className= "landing__container2__span">VOLUNTARIADO</span></button>
        </Link>
        <Link to="/Perdidos">
          <button className="landing__container2__button"><img className="landing__container2__img" src={perdidos} alt="perdidos" /><span className= "landing__container2__span">PERDIDOS</span></button>
        </Link>
        <Link to="/Form">
          <button className="landing__container2__button"><img className="landing__container2__img" src={publicar} alt="publicar" /><span className= "landing__container2__span">PUBLICAR</span></button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;