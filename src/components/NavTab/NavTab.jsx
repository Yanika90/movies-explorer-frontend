import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='progect-navigation'>
      <ul className='progect-navigation__elements'>
        <li className='progect-navigation__element'>
          <a className='progect-navigation__link link' href='#about-project'>
            О&nbsp;проекте
          </a>
        </li>
        <li className='progect-navigation__element'>
          <a className='progect-navigation__link link' href='#techs'>
            Технологии
          </a>
        </li>
        <li className='progect-navigation__element'>
          <a className='progect-navigation__link link' href='#about-me'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
