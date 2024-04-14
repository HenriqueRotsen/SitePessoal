import { Link } from 'react-router-dom';
import '../styles/header.css'
import React, { useState } from 'react';

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="Header">
      <header>
        <div class='logo'>
          <img src='henrique-rotsen-high-resolution-logo-transparent.png' alt="Henrique Rotsen" class='logo-header'></img>
        </div>
        <nav className='navbar'>
          <div class='navbar-container'>
            <Link to='/' className='navbar-logo'>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav menu-active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
                <Link to='/trabalhos' className='nav-links' onClick={closeMobileMenu}>
                  Trabalhos
                </Link>
                <Link to='/curriculo' className='nav-links' onClick={closeMobileMenu}>
                  Currículo
                </Link>
                <Link to='/contato' className='nav-links' onClick={closeMobileMenu}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;