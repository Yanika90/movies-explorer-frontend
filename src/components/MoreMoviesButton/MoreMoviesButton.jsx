import React from 'react';
import './MoreMoviesButton.css';

function MoreMoviesButton() {
  return (
    <section className='more-movies'>
      <button
        className='more-movies__button button'
        aria-label='Загрузить ещё фильмы'
        type='button'
      >
        Ещё
      </button>
    </section>
  );
}

export default MoreMoviesButton;
