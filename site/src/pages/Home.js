import '../App.css';
import '../styles/Home.css';
import React from 'react';
import Logo from '../components/images/logo-no-background.png'
import ProfessionalFoto from '../components/images/foto-profissional.jpeg'
import { useState, useEffect } from 'react';
import Button from '../components/Button.js'

export const Home = () => {
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
            <h1>Sobre</h1>
            <section className='about-container'>

                <div className='side-text'>
                    <p>
                        Graduando em Ciência da Computação pela Universidade Federal de Minas Gerais (UFMG).<br />
                        <b>Principais conhecimentos</b>
                    </p>
                    <b>Linguagens</b>
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
                    <b>Bibliotecas</b>
                    <ul className='has-bar'>
                        <li className='item'>.NET</li>
                        <li className='item'>Pandas</li>
                        <li className='item'>Scypi</li>
                        <li className='item'>Numpy</li>
                        <li className='item'>Seaborn</li>
                        <li className='item'>Scikit-learn</li>
                        <li className='item'>Statsmodels</li>
                    </ul>
                    <b>Outras Tecnologias</b>
                    <ul className='tecnologies'>
                        <li className='item'>Azure DevOPS</li>
                        <li className='item'>VS Code</li>
                        <li className='item'>Visual Studio</li>
                        <li className='item'>Excel</li>
                        <li className='item'>Scrum</li>
                        <li className='item'>kanban</li>
                        <li className='item'>Design Thinking</li>
                        <li className='item'>Knime</li>
                        <li className='item'>SolidWorks</li>
                    </ul>
                    Possui bastante interesse nas áreas de Análise de Dados e Pesquisa Operacional, tendo como foco principal as aplicações voltadas para o mercado automotivo e computação embarcada.
                    <br />
                    Sua paixão pela Ciência de Dados e Pesquisa Operacional reflete-se em suas realizações, incluindo o desenvolvimento de um algoritmo inicial de Machine Learning, a implementação do
                    algoritmo Simplex em Python. Além de outros trabalhos... <b>Para saber mais, acesse a página a seguir</b>
                    <br />
                </div>
                <div className='professional-image-box'>
                    <img src={ProfessionalFoto} alt='Henrique Rotsen' className='professional-image' />
                </div>
            </section>
            <div className='btn-contato'>
                <Button path='/trabalhos' buttonSize={'btn--medium'}>Veja mais trabalhos</Button>
            </div>
        </>
    )
}