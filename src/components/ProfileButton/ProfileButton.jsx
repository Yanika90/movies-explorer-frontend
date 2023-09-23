import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProfileButton.css';
import profileIconBlue from '../../images/header-profile-button-blue.svg';
import profileIconGrey from '../../images/header-profile-button-grey.svg';

function ProfileButton({ isLoggedIn }) {
  const location = useLocation();
  const profileButtonColor = location.pathname !== '/';
  const profileIconColor = location.pathname !== '/';

  return (
    <div
      className={`profile-button ${
        profileButtonColor ? 'profile-button_type_deep-grey' : 'profile-button_type_deep-blue'
      }`}
    >
      <Link to='/profile' className='profile-button__link link'>
        Аккаунт
      </Link>
      <img
        className='profile-button__icon'
        src={profileIconColor ? profileIconGrey : profileIconBlue}
        alt='Иконка профиля'
      ></img>
    </div>
  );
}

export default ProfileButton;
