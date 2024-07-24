import '../App.css';
import '../styles/Trabalhos.css';
import React from 'react';

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
              <li>GPS U-blox NEO-6M®️</li>
              <li>Google Colab</li>
              <li>Python</li>
              <li>Pandas</li>
              <li>Folium</li>
              <li>Plotly</li>
              <li>TinyGPS</li>
            </ul>
            <p>O desenvolvimento foi end-to-end, desde a montagem das peças no Arduino até o tratamento e análise dos dados obtidos.
              <br />Nesse link <a href='https://colab.research.google.com/drive/1xw8AI5gp2rZgYm2RLGmsxwaIqsB-6qwc?usp=sharing'>Análise de Dados - GPS</a>
              , é possível ver as análises que foram feitas e inclusive testar com outros dados de GPS que tenham o mesmo formato do da U-blox.</p>
          </div>
        </div>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>Otimização - Simplex</h2>
            <p>
              Desenvolvido por George Dantzig em 1947 o algoritmo Simplex é um método poderoso e eficiente para resolver problemas de <b>programação linear</b>.<br />
              O desenvolvimento desse trabalho ocorreu durante a disciplina de Pesquisa Operacional (DCC035), ministrada pelo Professor Cristiano Arbex Valle (PhD em Matemática Aplicada).<br />
              O trabalho foi feito em <b>Python</b> e o algoritmo usa a PL extendida, para que ja tenhamos o certificado de otimalidade/inviabilidade. Dessa maneira temos um algoritmo capaz de solucionar
              várias PL's, com uma velocidade muito boa.<br />
              Enfim, o Simplex é uma abordagem iterativa que começa com uma solução viável e aprimora iterativamente essa solução até alcançar a solução ótima, ele
              termina quando não há mais movimentos possíveis que melhorem a solução, indicando que a solução atual é ótima.<br />
              <br /><a href='https://github.com/HenriqueRotsen/Simplex'>SIMPLEX</a>
            </p>
          </div>
        </div>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-1'>
            <h2 className='work-title'>Caixeiro Viajante (Travelling Salesman Problem - TSP)</h2>
            <p>
              Já foram feitos alguns trabalhos nessa área voltados para resolver esse problema clássico da computação!
            </p>
            <ul className='vertical'>
              <li><a href='https://github.com/HenriqueRotsen/Caixeiro_Viajante/blob/master/source/bb.py'>Branch & Bound<br /></a>
                O método Branch and Bound é uma técnica de busca sistemática usada para resolver problemas combinatórios, como o TSP 
              </li>
              <li><a href='https://github.com/HenriqueRotsen/Caixeiro_Viajante/blob/master/source/twt.py'>Twice-Around-The-Three<br /></a>
                É um algoritmo heurístico que fornece uma solução aproximada para o TSP. Ele é baseado na construção de uma árvore geradora mínima (Minimum Spanning Tree - MST)
              </li>
              <li><a href='https://github.com/HenriqueRotsen/Caixeiro_Viajante/blob/master/source/cf.py'>Christofides<br /></a>
                O algoritmo de Christofides é uma heurística que produz uma solução com uma garantia de aproximação de 1,5 vezes a solução ótima para o TSP quando as distâncias satisfazem a desigualdade triangular (a distância direta entre duas cidades é sempre menor ou igual à soma das distâncias indiretas)
              </li>
            </ul>
          </div>
        </div>
        <hr className='divider' />
        <div className='work'>
          <div className='info-container-2'>
            <h2 className='work-title'>Desenvolvimento de Software</h2>
            <p>
              Já foram feitos alguns trabalhos nessa área
              Atua no desenvolvimento de um
            </p>
            <ul className='vertical'>
              <li><a href='https://github.com/caiotcunha/foodFit'>FoodFit<br /></a>
                Sistema de geração de dietas usando Inteligência Artificial por meio da API do ChatGPT, feito em Java Script usando React
              </li>
              <li><a href='https://github.com/HenriqueRotsen/coManda'>coManda<br /></a>
                Sistema de comandas individuais para bares e clientes, que visa facilitar as divisões de conta, feito em Java Script, Type Script e Vue
              </li>
              <li><a href='https://santiagocotton.com/'>Santiago Cotton<br /></a>
                Software interno para gestão e acompanhamento de contratos para a Santiago Cotton LTDA, sistema essa feito em C# usando framework .NET com Windows Forms
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}