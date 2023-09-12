import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';
import NavigationUsers from './NavigationUsers/NavigationUsers';
import NavigationGuest from './NavigationGuest/NavigationGuest';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({ isLoggedIn }) {
  return (
    <nav className='navigation'>
      <Logo />
      {isLoggedIn ? (
        <>
          <NavigationUsers />
          <BurgerMenu />
        </>
      ) : (
        <NavigationGuest />
      )}
    </nav>
  );
}

export default Navigation;

// Необходимо добавить ! перед isLoggedIn в 12 строке, чтобы посмотреть страницу от лица зарегистрированного пользователя
