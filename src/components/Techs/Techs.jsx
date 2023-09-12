import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__header'>Технологии</h2>
      <div className='techs__container'>
        <div className='techs__info'>
          <h3 className='techs__title'>7&nbsp;технологий</h3>
          <p className='techs__subtitle'>
            На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
            в&nbsp;дипломном проекте.
          </p>
        </div>
        <div className='techs__items'>
          <p className='techs__item'>HTML</p>
          <p className='techs__item'>CSS</p>
          <p className='techs__item'>JS</p>
          <p className='techs__item'>React</p>
          <p className='techs__item'>Git</p>
          <p className='techs__item'>Express.js</p>
          <p className='techs__item'>mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
