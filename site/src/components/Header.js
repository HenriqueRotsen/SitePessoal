import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LOGO
            <i class='fab fa-typo3' />
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
      </nav>
    </>
  );
}

export default Header;