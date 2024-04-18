import '../App.css';
import React from 'react';
import Logo from '../components/images/logo-no-background.png'


export const Home = () => {
    console.log('oi')
    return (
        <>
            <div className='main-box'>
                <img src={Logo} alt='Logo' />
            </div>
            <section className='about-container'>
                <h1>Sobre Mim</h1>
                <div className='side-text'></div>
            </section>
        </>
    )
}