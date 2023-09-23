import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  const location = useLocation();
  const headerColor = location.pathname !== '/';

  return (
    <header className={`header ${headerColor ? 'header_type_deep-grey' : 'header_type_deep-blue'}`}>
      <Navigation loggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
