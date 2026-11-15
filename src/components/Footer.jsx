
import logo from '../assets/LOGO.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <img
        src={logo}
        alt="Kasa"
        className="footer-logo"
      />
      <p>© 2026 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

