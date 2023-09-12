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
    return location.pathname === path ? 'burger__link_type_active' : '';
  }

  return (
    <>
      <button
        className='burger__button button'
        onClick={handleClick}
        aria-label='Кнопка открытия меню'
        type='button'
      ></button>
      <div className={`burger__overlay ${isOpen ? 'burger__overlay_type_open' : ''}`}>
        <div className={`burger__popup ${isOpen ? 'burger__popup_type_open' : ''}`}>
          <button
            className='burger__close-button button'
            onClick={handleClick}
            aria-label='Кнопка закрытия меню'
            type='button'
          ></button>
          <nav className='burger__links link'>
            <Link to='/' className={`burger__link ${setLinkClass('/')}`}>
              Главная
            </Link>
            <Link to='/movies' className={`burger__link ${setLinkClass('/movies')}`}>
              Фильмы
            </Link>
            <Link to='/saved-movies' className={`burger__link ${setLinkClass('/saved-movies')}`}>
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
