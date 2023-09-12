import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <h4 className='footer__header'>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h4>
        <div className='footer__info'>
          <p className='footer__year-production'>&copy; 2023</p>
          <ul className='footer__elements'>
            <li className='footer__element'>
              <a
                className='footer__element-link link'
                target='_blank'
                href='https://practicum.yandex.ru'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__element'>
              <a
                className='footer__element-link link'
                target='_blank'
                href='https://github.com'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
