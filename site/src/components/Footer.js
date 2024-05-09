import React from 'react';
import { Link } from 'react-router-dom';
import { getYear } from "https://unpkg.com/date-fns/getYear.mjs";
import '../styles/Footer.css'


function Footer() {
  const anoAtual = getYear(new Date());

  return (
    <>
      <div className='footer-container'>
        <div className='social-medias'>
          <a href='https://www.linkedin.com/in/henrique-rotsen-santos-ferreira/'>
            <i class="fab fa-linkedin"/>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100002146099863'>
            <i class="fab fa-facebook" />
          </a>
          <a href='https://github.com/HenriqueRotsen'>
            <i class="fab fa-github" />
          </a>
        </div>
        <div className='copyright'>
          Henrique Rotsen - {anoAtual} Todos os direitos reservados ©
        </div>
      </div>
    </>
  );
}

export default Footer;