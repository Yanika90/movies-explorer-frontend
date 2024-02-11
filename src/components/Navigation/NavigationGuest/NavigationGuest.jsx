import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css';

function NavigationGuest() {
  return (
    <nav className='navigation__guests'>
      <Link to='/signup' className='navigation__link navigation__link_type_register link'>
        Регистрация
      </Link>
      <div className='navigation__login-wrap button'>
        <Link to='/signin' className='navigation__link navigation__link_type_login link'>
          Войти
        </Link>
      </div>
    </nav>
  );
}

export default NavigationGuest;
