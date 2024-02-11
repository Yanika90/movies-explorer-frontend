import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCardImg from '../../images/movie-card.png';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCard() {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsSavedMovie(!isSavedMovie);
  }

  return (
    <li
      className={`movies-element ${
        location.pathname === '/saved-movies' ? 'movies-element_type_hover' : ''
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className='movies-element__img'
        src={MoviesCardImg}
        alt='Кадр из фильма «33 слова о дизайне»'
      />
      <div className='movies-element__container'>
        <div className='movies-element__info'>
          <h2 className='movies-element__title'>33 слова о дизайне</h2>
          <p className='movies-element__duration'>1ч 47м</p>
        </div>
        {location.pathname === '/movies' && (
          <button
            className={`movies-element__button button ${
              isSavedMovie ? 'movies-element__button_type_active' : ''
            }`}
            type='submit'
            aria-label='Сохранить в избранное'
            onClick={handleClick}
          />
        )}
        {location.pathname === '/saved-movies' && isHover && (
          <button
            className='movies-element__button_type_delete button'
            type='submit'
            aria-label='Удалить из избранного'
          />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
