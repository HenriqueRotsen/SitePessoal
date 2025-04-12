import '../App.css';
import '../styles/Home.css';
import React, { useState, useEffect } from 'react';
import Logo from '../components/images/logo-no-background.png';
import ProfessionalFoto from '../components/images/profissional2.jpg';
import Button from '../components/Button.js';
import { useTranslation } from 'react-i18next';

export const Home = () => {
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
            <h1>{t('home.sobre')}</h1>
            <section className='about-container'>
                <div className='side-text'>
                    <p>{t('home.descricao')}<br /><b>{t('home.descricao2')}</b></p>
                    <b>{t('home.linguagens')}</b>
                    <ul className='has-bar'>
                        <li className='item'>C</li>
                        <li className='item'>C++</li>
                        <li className='item'>C#</li>
                        <li className='item'>JavaScript</li>
                        <li className='item'>Python</li>
                        <li className='item'>Java</li>
                        <li className='item'>Matlab</li>
                        <li className='item'>Vue</li>
                        <li className='item'>Html</li>
                        <li className='item'>Css</li>
                    </ul>

                    <b>{t('home.bibliotecas')}</b>
                    <ul className='has-bar'>
                        <li className='item'>PyTorch</li>
                        <li className='item'>.NET</li>
                        <li className='item'>Pandas</li>
                        <li className='item'>Scypi</li>
                        <li className='item'>Numpy</li>
                        <li className='item'>Seaborn</li>
                        <li className='item'>Scikit-learn</li>
                        <li className='item'>Statsmodels</li>
                    </ul>

                    <b>{t('home.outrasTecnologias')}</b>
                    <ul className='tecnologies'>
                        <li className='item'>SonarQube</li>
                        <li className='item'>Jenkins</li>
                        <li className='item'>OwaspZap</li>
                        <li className='item'>Azure DevOPS</li>
                        <li className='item'>VS Code</li>
                        <li className='item'>Visual Studio</li>
                        <li className='item'>Excel</li>
                        <li className='item'>Scrum</li>
                        <li className='item'>Kanban</li>
                        <li className='item'>Design Thinking</li>
                        <li className='item'>Knime</li>
                        <li className='item'>SolidWorks</li>
                    </ul>
                    <p>{t('home.interesses')}</p>
                    <p>{t('home.interesses2')}</p>
                </div>

                <div className='professional-image-box'>
                    <img src={ProfessionalFoto} alt='Henrique Rotsen' className='professional-image' />
                </div>
            </section>
            <div className='btn-contato'>
                <Button path='/trabalhos' buttonSize={'btn--medium'}>
                    {t('home.btnTrabalhos')}
                </Button>
            </div>
        </>
    );
};
