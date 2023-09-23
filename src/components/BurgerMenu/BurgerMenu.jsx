import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';
import profileIconGrey from '../../images/header-profile-button-grey.svg';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function setLinkClass(path) {
    return location.pathname === path
      ? 'navigation__burger-link navigation__burger-link_type_active'
      : '';
  }

  return (
    <>
      <button
        className='navigation__burger-button button'
        onClick={handleClick}
        aria-label='Кнопка открытия меню'
        type='button'
      ></button>
      <div
        className={`navigation__burger-overlay ${
          isOpen ? 'navigation__burger-overlay_type_open' : ''
        }`}
      >
        <div
          className={`navigation__burger-popup ${
            isOpen ? 'navigation__burger-popup_type_open' : ''
          }`}
        >
          <button
            className='navigation__burger-close-button button'
            onClick={handleClick}
            aria-label='Кнопка закрытия меню'
            type='button'
          ></button>
          <nav className='navigation__burger-links link'>
            <Link to='/' className={`navigation__burger-link ${setLinkClass('/')}`}>
              Главная
            </Link>
            <Link to='/movies' className={`navigation__burger-link ${setLinkClass('/movies')}`}>
              Фильмы
            </Link>
            <Link
              to='/saved-movies'
              className={`navigation__burger-link ${setLinkClass('/saved-movies')}`}
            >
              Сохранённые фильмы
            </Link>
          </nav>
          <div className='profile-button profile-button_type_deep-grey'>
            <Link to='/profile' className='profile-button__link link'>
              Аккаунт
            </Link>
            <img className='profile-button__icon' src={profileIconGrey} alt='Иконка профиля'></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
