import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo_header.png";

const Header = () => {
  return (
    <header>
      <NavLink to="/"><img src={logoHeader} className="logo-header" alt="logo-header" /></NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
