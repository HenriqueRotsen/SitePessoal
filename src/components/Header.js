import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import LogoCantoPagina from './images/logo-no-background-canto.png';
import { useTranslation } from 'react-i18next';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={LogoCantoPagina} alt='Henrique Rotsen' width='100%' height='auto' />
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
              <Link to='/trabalhos' className='nav-links' onClick={closeMobileMenu}>
                {t('header.trabalhos')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/curriculo' className='nav-links' onClick={closeMobileMenu}>
                {t('header.curriculo')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contato' className='nav-links' onClick={closeMobileMenu}>
                {t('header.contato')}
              </Link>
            </li>

            {/* Seletor de idioma para mobile */}
            <li className='nav-item language-selector-mobile'>
              <select onChange={handleLanguageChange} value={i18n.language}>
                <option value='pt'>🇧🇷</option>
                <option value='en'>🇺🇸</option>
              </select>
            </li>
          </ul>

          {/* Seletor de idioma para desktop */}
          <div className='language-selector desktop-only'>
            <select onChange={handleLanguageChange} value={i18n.language}>
              <option value='pt'>🇧🇷</option>
              <option value='en'>🇺🇸</option>
            </select>
          </div>
        </div>
        <hr className='nav-hr' />
      </nav>
    </>
  );
}

export default Header;
