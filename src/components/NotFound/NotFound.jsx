import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className='page-not-found'>
      <main className='page-not-found__box'>
        <div className='page-not-found__error-type'>
          <h1 className='page-not-found__title'>404</h1>
          <p className='page-not-found__subtitle'>Страница не&nbsp;найдена</p>
        </div>
        <Link to='/' className='page-not-found__back-link link'>
          Назад
        </Link>
      </main>
    </section>
  );
}

export default NotFound;
