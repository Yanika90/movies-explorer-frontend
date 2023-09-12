import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__header'>О&nbsp;проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__info'>
          <h3 className='about-project__title'>Дипломный проект включал 5&nbsp;этапов</h3>
          <p className='about-project__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и&nbsp;финальные доработки.
          </p>
        </div>
        <div className='about-project__info'>
          <h3 className='about-project__title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className='about-project__subtitle'>
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__back'>
          <h6 className='about-project__weeks about-project__weeks_type_back'>1&nbsp;неделя</h6>
          <p className='about-project__type'>Back-end</p>
        </div>
        <div className='about-project__front'>
          <h6 className='about-project__weeks about-project__weeks_type_front'>4&nbsp;недели</h6>
          <p className='about-project__type'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
