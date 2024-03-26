import { Link } from "react-router-dom";
import '../../scss/landing.scss';

function Landing() {
  
  return (
    <div className="home-page-container homepage landing">
      <div className="homepage__card">
        <h1 className="homepage__title title">Perros y Gatos España</h1>
        <di>
        <p className="homepage__description">{"Quien salva una vida salva al mundo entero"}</p>
        <p className="homepage__description">Frase recogida en el Talmud</p>
        </di>
        <p className="homepage__description">¿Qué quieres hacer?</p> 
        <Link to="/Adopcion">
          <button className="homepage__button button--link">Adoptar a una mascota</button>
        </Link>
        <Link to="/Acogida">
          <button className="homepage__button button--link">Acoger a una mascota</button>
        </Link>
        <Link to="/Voluntariado">
          <button className="homepage__button button--link">Voluntariado</button>
        </Link>
        <Link to="/Perdidos">
          <button className="homepage__button button--link">Ver Mascotas Perdidas</button>
        </Link>
        <Link to="/Form">
          <button className="homepage__button button--link">Publicar mascota o desaparición</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;