import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import LogoCantoPagina from './images/logo-no-background-canto.png'

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={LogoCantoPagina} alt='Henrique Rotsen' width='100%' height='auto'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trabalhos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trabalhos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/curriculo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Currículo
              </Link>
            </li>

            <li>
              <Link
                to='/contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <hr className='nav-hr'></hr>
      </nav>
    </>
  );
}

export default Header;