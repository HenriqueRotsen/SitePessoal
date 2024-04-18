import '../App.css';
import '../styles/Home.css';
import React from 'react';
import Logo from '../components/images/logo-no-background.png'
import Background from '../components/images/background-home-page.png'
import ProfessionalFoto from '../components/images/foto-profissional.jpeg'
import { useState, useEffect } from 'react';

export const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: 'auto',
        height: '17vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const [showLogo, setShowLogo] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='main-box' style={backgroundStyle}>
                <img src={Logo} alt='Logo' className={`logo-main-box ${showLogo ? 'show' : ''}`} />
            </div>
            <h1>Sobre</h1>
            <section className='about-container'>

                <div className='side-text'>
                    <p>
                        Graduando em Ciência da Computação pela Universidade Federal de Minas Gerais (UFMG).<br />
                        Possuí experiência com as seguintes tecnologias:</p>
                    <ul className='languages'>
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
                    <ul className='libraries'>
                        <li className='item'>.NET</li>
                        <li className='item'>Pandas</li>
                        <li className='item'>Scypi</li>
                        <li className='item'>Numpy</li>
                        <li className='item'>Seaborn</li>
                        <li className='item'>Scikit-learn</li>
                        <li className='item'>Statsmodels</li>
                    </ul>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel consequat urna. Praesent ut tempor massa, eu eleifend mi. Cras pellentesque, tortor eu blandit mattis, mi est semper sapien, eget aliquam lacus nisl eget mauris. Integer fermentum pretium mauris, non rutrum ante gravida a. Nullam vitae hendrerit ipsum. Proin facilisis nibh eros, in aliquam lacus malesuada ac. Sed nunc ante, consectetur id est porta, gravida vulputate libero. In consectetur lacinia libero, a fermentum augue consequat gravida. Sed bibendum sed elit at rutrum. Maecenas vehicula mollis eros in accumsan. Curabitur maximus ligula urna, id accumsan ante mollis id. Nam sagittis, ligula quis vehicula condimentum, ex ipsum condimentum mauris, non ornare risus metus eget augue. Donec augue nisl, tincidunt sed malesuada sit amet, accumsan a magna. Etiam vitae vestibulum justo. Mauris neque ex, mollis et efficitur et, luctus eu justo. Curabitur tortor purus, efficitur sed justo id, semper commodo mauris.
                    <br/>Mauris aliquet, enim id fringilla molestie, dolor lectus iaculis augue, in eleifend libero nibh at velit. Pellentesque in justo nunc. Mauris consequat massa non lorem auctor, ut feugiat magna finibus. Pellentesque a nisi tincidunt, malesuada arcu a, tempor felis. In vehicula sit amet eros ut ullamcorper. Cras porta non nunc eu ornare. Integer ornare et risus in pulvinar. Cras maximus ultricies dictum. Nullam at scelerisque erat. Praesent quis felis fermentum, imperdiet nisi non, dictum leo. Cras sed mi ac quam faucibus porta vel vitae augue.
                </div>
                <div className='professional-image-box'>
                    <img src={ProfessionalFoto} alt='Henrique Rotsen' className='professional-image' />
                </div>
            </section>
        </>
    )
}