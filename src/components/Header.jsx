
import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.svg';

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Kasa - Home" />
      </NavLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;

