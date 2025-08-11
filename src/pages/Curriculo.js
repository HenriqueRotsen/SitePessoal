import '../App.css';
import '../styles/Curriculo.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DownloadButton from '../components/DownloadButton.js';
import ResumeEnglish from '../components/files/Henrique_Rotsen_resume_english.pdf';
import ResumePortuguese from '../components/files/Henrique_Rotsen_curriculo_portugues.pdf';
import ResumeLinkedin from '../components/files/Henrique_Rotsen_curriculo_linkedin.pdf';
import Logo from '../components/images/logo-no-background.png';

export const Curriculo = () => {
  const [showLogo, setShowLogo] = useState(false);
  const { t } = useTranslation();

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
        <h2>{t('curriculo.titulo')}</h2>
        <ul className='files'>
          <li className='item-resume'>
            <h3>{t('curriculo.cv')}</h3>
            <DownloadButton
              buttonStyle="btn--primary"
              downloadUrl={ResumePortuguese}
              downloadFileName="Henrique_Rotsen_curriculo_portugues"
            >
              {t('curriculo.baixar')}
            </DownloadButton>
            <p>{t('curriculo.idiomaPt')}</p>
          </li>
          <li className='item-resume'>
            <h3>{t('curriculo.cv')}</h3>
            <DownloadButton
              downloadUrl={ResumeEnglish}
              downloadFileName="Henrique_Rotsen_resume_english"
            >
              {t('curriculo.baixar')}
            </DownloadButton>
            <p>{t('curriculo.idiomaEn')}</p>
          </li>
          <li className='item-resume'>
            <h3>LinkedIn</h3>
            <DownloadButton
              downloadUrl={ResumeLinkedin}
              downloadFileName="Henrique_Rotsen_curriculo_linkedin"
            >
              {t('curriculo.baixar')}
            </DownloadButton>
            <p>{t('curriculo.idiomaEn')}</p>
          </li>
        </ul>
      </main>
    </>
  );
};