import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <div className='search-form__search-box'>
            <input className='search-form__input' type='text' placeholder='Фильм' required></input>
            <button
              className='search-form__button button'
              type='submit'
              aria-label='Поиск фильмов'
            ></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
