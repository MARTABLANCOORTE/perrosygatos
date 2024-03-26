import React from 'react';
import '../../scss/App.scss';
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <NavLink to="/" className="menu__link">
            Inicio
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Adopcion/*"  className="menu__link">
            Adopción
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Acogida"  className="menu__link">
            Acogida
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Perdidos"  className="menu__link">
            Perdidos
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Voluntariado"  className="menu__link">
            Voluntariado
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Form"  className="menu__link">
            Publicar
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/AboutUs"  className="menu__link">
            Sobre Nosotros
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/Contacto"  className="menu__link">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
