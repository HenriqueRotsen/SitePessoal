import '../App.css';
import '../styles/Trabalhos.css';
import React from 'react';
import mapa1 from '../components/images/mapa1.jpeg'
import mapa1_real from '../components/images/mapa1_real.jpeg'
import mapa2 from '../components/images/mapa2.jpeg'
import arduino from '../components/images/montagem_arduino.jpeg'

export const Trabalhos = () => {
  return (
    <>
      <section className='works'>
        <h1 className='main-title'>Principais Trabalhos</h1>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>Análise de Dados - GPS Fórmula UFMG</h2>
            <p>Foi feito o desenvolvimento de um sistema de GPS para o carro de corrida da UFMG. Esse sistema contou com as seguintes tecnologias:</p>
            <ul>
              <li>Arduino</li>
              <li>C++</li>
              <li>GPS U-blox NEO-6M©</li>
              <li>Google Colab</li>
              <li>Python</li>
              <li>Pandas</li>
              <li>Folium</li>
              <li>Plotly</li>
              <li>TinyGPS</li>
            </ul>
            <p>O desenvolvimento foi end-to-end, desde a montagem das peças no Arduino até o tratamento e análise dos dados obtidos. 
              <br/>Nesse link <a href='https://colab.research.google.com/drive/1xw8AI5gp2rZgYm2RLGmsxwaIqsB-6qwc?usp=sharing'>Análise de Dados - GPS</a>
              , é possível ver as análises que foram feitas e inclusive testar com outros dados de GPS que tenham o mesmo formato do da U-blox.</p>
          </div>
          <div className='extras'>
            <img className='gps-1' src={arduino}/>
            <img className='gps' src={mapa2}/>
          </div>
        </div>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>Otimização - Simplex</h2>
          </div>
        </div>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>Aprendizado de Máquina</h2>
          </div>
        </div>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>Desenvolvimento Web</h2>
          </div>
        </div>
      </section>
    </>
  );
}