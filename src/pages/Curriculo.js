import '../App.css';
import '../styles/Curriculo.css';
import React from 'react';
import { useState, useEffect } from 'react';
import DownloadButton from '../components/DownloadButton.js';
import ResumeEnglish from '../components/files/Henrique_Rotsen_curriculo_portugues.pdf'
import ResumePortuguese from '../components/files/Henrique_Rotsen_curriculo_portugues.pdf'
import ResumeLinkedin from '../components/files/Henrique_Rotsen_curriculo_linkedin.pdf'
import Logo from '../components/images/logo-no-background.png'


export const Curriculo = () => {
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='main-box'>
        <img src={Logo} alt='Logo' className={`logo-main-box ${showLogo ? 'show' : ''}`} />
      </div>
      <main className='main'>
        <h2>Modelos de Currículo</h2>
        <ul className='files'>
          <li className='item-resume'>
            <h3>Curriculum Vitae</h3>
            <DownloadButton buttonStyle="btn--primary" downloadUrl={ResumePortuguese} downloadFileName="Henrique_Rotsen_curriculo_portugues">Download</DownloadButton>
            <p>Português (PT/BR)</p>
          </li>
          <li className='item-resume'>
            <h3>Curriculum Vitae</h3>
            <DownloadButton downloadUrl={ResumeEnglish} downloadFileName="Henrique_Rotsen_resume_english">Download</DownloadButton>
            <p>English (EN/US)</p>
          </li>
          <li className='item-resume'>
            <h3>LinkedIn</h3>
            <DownloadButton downloadUrl={ResumeLinkedin} downloadFileName="Henrique_Rotsen_curriculo_linkedin">Download</DownloadButton>
            <p>Português (PT/BR)</p>
          </li>
        </ul>
      </main>
    </>
  );
}