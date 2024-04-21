import '../App.css';
import '../styles/Curriculo.css';
import React from 'react';
import AgeDisplay from '../components/AgeDisplay.js'

export const Curriculo = () => {
  const birthDate = new Date('2001-02-04');

  return (
    <>
      <main className='main'>
        <section className='infos'>
          <h2>Informações Pessoais</h2>
          <p>
            <b>Henrique Rotsen Santos Ferreira</b> <AgeDisplay birthDate={birthDate} />
            
          </p>
        </section>
        <section className='professional-experience-container'>
          <h2>Experiências Profissionais</h2>
            <ul className='experiences'>
              <li className='item'>
                <h3>Universo Licitações</h3>
                <h4>Assistente de desenvolvimento</h4>
                <p>Julho 2021 - Dezembro 2023</p>
              </li>
              <li className='item'>
                <h3>ADAC Motors</h3>
                <h4>Estagiário</h4>
                <p>Janeiro 2024 - Março 2024</p>
              </li>
              <li className='item'>
                <h3>Plural Systems</h3>
                <h4>Estagiário</h4>
                <p>Março 2024 - Presente</p>
              </li>
            </ul>
        </section>
      </main>
    </>
  );
}