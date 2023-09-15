import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <form className='checkbox'>
      <label className='checkbox__lable button' htmlFor='checkbox'>
        <input className='checkbox__input' type='checkbox' id='checkbox' />
        <span className='checkbox__slider'></span>
      </label>
      <p className='checkbox__title'>Короткометражки</p>
    </form>
  );
}

export default FilterCheckbox;
