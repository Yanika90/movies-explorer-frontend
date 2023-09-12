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
      className={`movies__movie-card ${
        location.pathname === '/saved-movies' ? 'movies__movie-card_type_hover' : ''
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className='movie-card__img' src={MoviesCardImg} alt='Кадр из фильма' />
      <div className='movie-card__container'>
        <div className='movie-card__info'>
          <h3 className='movie-card__title'>33 слова о дизайне</h3>
          <p className='movie-card__duration'>1ч 47м</p>
        </div>
        {location.pathname === '/movies' && (
          <button
            className={`movie-card__button button ${
              isSavedMovie ? 'movie-card__button_type_active' : ''
            }`}
            type='submit'
            aria-label='Сохранить в избранное'
            onClick={handleClick}
          />
        )}
        {location.pathname === '/saved-movies' && isHover && (
          <button
            className='movie-card__button_type_delete button'
            type='submit'
            aria-label='Удалить из избранного'
          />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
