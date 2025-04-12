import DownloadButton from '../components/DownloadButton.js';
import '../App.css';
import '../styles/Trabalhos.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MDA from '../components/files/Mineracao_Dados_Apartamentos_EUA.pdf';

export const Trabalhos = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='works'>
        <h1 className='main-title'>{t('trabalhos.titulo')}</h1>
        <hr className='divider' />

        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>{t('trabalhos.ia')}</h2>
            <p>{t('trabalhos.ia_desc')}</p>
          </div>
        </div>

        <hr className='divider' />

        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('trabalhos.ciberseguranca')}</h2>
            <p>{t('trabalhos.ciberseguranca_desc')}</p>
          </div>
        </div>

        <hr className='divider' />
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>{t('trabalhos.mineracao')}</h2>
            <p>{t('trabalhos.mineracao_desc')}</p>
            <ul className='vertical'>
              <li><b>{t('trabalhos.analise')}</b><br />{t('trabalhos.analise_desc')}</li>
              <li><b>{t('trabalhos.agrupamento')}</b><br />{t('trabalhos.agrupamento_desc')}</li>
              <li><b>{t('trabalhos.regressao')}</b><br />{t('trabalhos.regressao_desc')}</li>
              <li><b>{t('trabalhos.itemsets')}</b><br />{t('trabalhos.itemsets_desc')}</li>
            </ul>
            <DownloadButton downloadUrl={MDA} downloadFileName="Mineracao_Dados_Apartamentos_EUA">
              {t('trabalhos.veja_trabalho')}
            </DownloadButton>
          </div>
        </div>

        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('trabalhos.simplex')}</h2>
            <p>{t('trabalhos.simplex_desc')} <br /><br />
              <a href='https://github.com/HenriqueRotsen/Simplex'>SIMPLEX</a>
            </p>
          </div>
        </div>

        <hr className='divider' />
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>{t('trabalhos.gps')}</h2>
            <p>{t('trabalhos.gps_desc')}</p>
            <ul>
              <li>Arduino</li>
              <li>C++</li>
              <li>GPS U-blox NEO-6M®️</li>
              <li>Google Colab</li>
              <li>Python</li>
              <li>Pandas</li>
              <li>Folium</li>
              <li>Plotly</li>
              <li>TinyGPS</li>
            </ul>
            <p>{t('trabalhos.gps_desc2')} <br />
              <a href='https://colab.research.google.com/drive/1xw8AI5gp2rZgYm2RLGmsxwaIqsB-6qwc?usp=sharing'>Análise de Dados - GPS</a>
            </p>
          </div>
        </div>

        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>{t('trabalhos.desenv_software')}</h2>
            <p>{t('trabalhos.desenv_software_desc')}</p>
            <ul className='vertical'>
              <li><a href='https://github.com/caiotcunha/foodFit'>FoodFit<br /></a>{t('trabalhos.foodfit_desc')}</li>
              <li><a href='https://github.com/HenriqueRotsen/coManda'>coManda<br /></a>{t('trabalhos.comanda_desc')}</li>
              <li><a href='https://santiagocotton.com/'>Santiago Cotton<br /></a>{t('trabalhos.santiago_desc')}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
