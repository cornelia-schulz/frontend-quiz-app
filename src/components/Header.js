import sun from '../assets/images/icon-sun-light.svg';
import sunDark from '../assets/images/icon-sun-dark.svg';
import moon from '../assets/images/icon-moon-light.svg';
import moonDark from '../assets/images/icon-moon-dark.svg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({isDark, onSwitch, title, icon}) {
  
  return (
    <div className="header">
      <header className="app-header">
        <Link to="/" className="app-header-title" state={{isDark: isDark}}>
          {title && <img src={icon} className={title} alt="icon" />}
          {title && <p className={isDark ? "dark-header-title" : "header-title"}>{title}</p>}
        </Link>
        <div className="app-header-toggle">
          <img src={isDark ? sun : sunDark} className="icon" alt="switch to light mode" />
          <label className="switch">
            <input type="checkbox" value={isDark} onChange={onSwitch} checked={isDark ? "checked" : ""} />
            <span className="slider round"></span>
          </label>
          <img src={isDark ? moon : moonDark} className="icon" alt="switch to dark mode" />
        </div>
      </header>
    </div>
  );
}

export default Header;