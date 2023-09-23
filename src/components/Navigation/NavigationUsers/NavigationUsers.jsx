import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navigation.css';
import ProfileButton from '../../ProfileButton/ProfileButton';

function NavigationUsers() {
  const location = useLocation();

  function setLinkClass(path) {
    return location.pathname === path ? 'navigation__link_type_active' : '';
  }

  return (
    <nav className='navigation__users'>
      <div className='navigation__movies'>
        <Link
          to='/movies'
          className={`navigation__link navigation__link_type_movies link ${setLinkClass(
            '/movies'
          )}`}
        >
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={`navigation__link navigation__link_type_movies link ${setLinkClass(
            '/saved-movies'
          )}`}
        >
          Сохранённые фильмы
        </Link>
      </div>
      <ProfileButton />
    </nav>
  );
}

export default NavigationUsers;
