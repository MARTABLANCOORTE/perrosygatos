import '../../scss/App.scss';
import logo from '../../images/logo.png';
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="header">
      <h1 className="title">Perros y Gatos España</h1>
      <img className="header" src={logo} alt="Logo" />
      <NavMenu />
    </header>
  );
}

export default Header;
