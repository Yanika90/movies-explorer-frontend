import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <ul className='portfolio__elements'>
        <li className='portfolio__element'>
          <a
            className='portfolio__element-link link'
            target='_blank'
            href='https://github.com/Yanika90/how-to-learn.git'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            className='portfolio__element-link link'
            target='_blank'
            href='https://github.com/Yanika90/russian-travel.git'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__element'>
          <a
            className='portfolio__element-link link'
            target='_blank'
            href='https://github.com/Yanika90/react-mesto-api-full-gha.git'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
