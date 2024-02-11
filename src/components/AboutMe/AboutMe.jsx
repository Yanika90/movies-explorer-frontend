import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import StudentPhoto from '../../images/student-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__box'>
        <h2 className='about-me__header'>Студент</h2>
        <div className='about-me__container'>
          <div className='about-me__info-box'>
            <h3 className='about-me__name'>Яна</h3>
            <p className='about-me__job'>Фронтенд-разработчик, 32&nbsp;года</p>
            <p className='about-me__info'>
              Я&nbsp;родилась в&nbsp;городе Тирасполе, там&nbsp;же закончила
              Естественно-географический факультет ПГУ им. Т.Г. Шевченко. В&nbsp;2015 году переехала
              в&nbsp;Смоленск, где проработала в&nbsp;образовательной сфере 7&nbsp;лет. Сейчас
              я&nbsp;решила научиться чему-то новому и&nbsp;начала кодить. После того, как закончу
              курс по&nbsp;веб-разработке, хочу попробовать себя во&nbsp;фрилансе и&nbsp;полностью
              сменить сферу деятельности. У&nbsp;меня есть муж и&nbsp;собака по&nbsp;кличке Юта.
              Я&nbsp;люблю слушать музыку, а ещё увлекаюсь плаванием и&nbsp;рисованием.
            </p>
            <a
              href='https://github.com/Yanika90'
              className='about-me__link link'
              target='_blank'
              rel='noreferrer'
            >
              <p className='about-me__github'>Github</p>
            </a>
          </div>
          <img className='about-me__photo' src={StudentPhoto} alt='Фото студента ЯП' />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;

// Я&nbsp;родилась и&nbsp;живу в&nbsp;Саратове, закончила факультет экономики СГУ.
//               У&nbsp;меня есть муж и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь
//               бегом. Недавно начала кодить. С&nbsp;2015 года работала в&nbsp;компании &laquo;СКБ
//               Контур&raquo;. После того, как прошла курс по&nbsp;веб-разработке, начала заниматься
//               фриланс-заказами и&nbsp;ушла с&nbsp;постоянной работы.
