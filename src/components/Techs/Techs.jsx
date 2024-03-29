import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__box'>
        <h2 className='techs__header'>Технологии</h2>
        <div className='techs__container'>
          <div className='techs__info'>
            <h3 className='techs__title'>7&nbsp;технологий</h3>
            <p className='techs__subtitle'>
              На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
              в&nbsp;дипломном проекте.
            </p>
          </div>
          <ul className='techs__items'>
            <li className='techs__item'>HTML</li>
            <li className='techs__item'>CSS</li>
            <li className='techs__item'>JS</li>
            <li className='techs__item'>React</li>
            <li className='techs__item'>Git</li>
            <li className='techs__item'>Express.js</li>
            <li className='techs__item'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
