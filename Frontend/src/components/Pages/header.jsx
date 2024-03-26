import '../../scss/App.scss';
import '../../scss/header.scss';
import React from 'react';
import logo from '../../images/logo.png';
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header>
      <div className="header">
        <img className="header__img" src={logo} alt="Logo" />
        <h1 className="header__h1">Perros y Gatos España</h1>
      </div>
      <div>
        <NavMenu className="header__nav"/>
      </div>
    </header>
  );
}

export default Header;
