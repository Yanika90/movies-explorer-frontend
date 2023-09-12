import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Logo.css';
import headerLogo from '../../images/logo.svg';

function Logo() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <Link to='/' className='logo logo_type_main'>
          {<img className='logo__img' src={headerLogo} alt='Логотип' />}
        </Link>
      )}
      {location.pathname === '/movies' && (
        <Link to='/' className='logo logo_type_main'>
          {<img className='logo__img' src={headerLogo} alt='Логотип' />}
        </Link>
      )}
      {location.pathname === '/saved-movies' && (
        <Link to='/' className='logo logo_type_main'>
          {<img className='logo__img' src={headerLogo} alt='Логотип' />}
        </Link>
      )}
      {location.pathname === '/profile' && (
        <Link to='/' className='logo logo_type_main'>
          {<img className='logo__img' src={headerLogo} alt='Логотип' />}
        </Link>
      )}
      {location.pathname === '/signup' && (
        <Link to='/' className='logo logo_type_auth'>
          {<img className='logo__img' src={headerLogo} alt='Логотип' />}
        </Link>
      )}
      {location.pathname === '/signin' && (
        <Link to='/' className='logo logo_type_auth'>
          {<img className='logo__img' src={headerLogo} alt='Логотип' />}
        </Link>
      )}
    </>
  );
}

export default Logo;
