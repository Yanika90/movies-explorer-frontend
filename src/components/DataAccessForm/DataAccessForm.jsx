import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DataAccessForm.css';
import Logo from '../Logo/Logo';

function DataAccessForm({ greeting, formName, addUserName, buttonText, question, link, linkText }) {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const input = evt.target;
    const { value, name } = input;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  return (
    <main className='data-access'>
      <section className='data-access__box'>
        <Logo />
        <h1 className='data-access__title'>{greeting}</h1>
        <form className='data-access__form' name={formName} id='form' noValidate>
          {addUserName && (
            <label className='data-access__label'>
              Имя
              <input
                className={`data-access__input ${
                  errors.name ? 'data-access__input_type_error' : ''
                }`}
                type='text'
                name='name'
                id='name'
                placeholder='Введите ваше имя'
                minLength='2'
                maxLength='40'
                required
                onChange={handleChange}
                value={formValue.name || ''}
              />
              <span
                className={`data-access__error ${!isValid ? 'data-access__error_type_active' : ''}`}
              >
                {errors.name}
              </span>
            </label>
          )}
          <label className='data-access__label'>
            E-mail
            <input
              className={`data-access__input ${
                errors.email ? 'data-access__input_type_error' : ''
              }`}
              type='email'
              name='email'
              id='email'
              placeholder='Введите ваш e-mail'
              minLength='5'
              maxLength='40'
              required
              onChange={handleChange}
              value={formValue.email || ''}
            />
            <span
              className={`data-access__error ${!isValid ? 'data-access__error_type_active' : ''}`}
            >
              {errors.email}
            </span>
          </label>
          <label className='data-access__label'>
            Пароль
            <input
              className={`data-access__input ${
                errors.password ? 'data-access__input_type_error' : ''
              }`}
              type='password'
              name='password'
              id='password'
              placeholder='Введите пароль'
              minLength='6'
              maxLength='40'
              required
              onChange={handleChange}
              value={formValue.password || ''}
            />
            <span
              className={`data-access__error ${!isValid ? 'data-access__error_type_active' : ''}`}
            >
              {errors.password}
            </span>
          </label>
          <button
            className={`data-access__submit button ${
              !isValid ? 'data-access__submit_type_disabled' : ''
            }`}
            type='submit'
            aria-label='Войти / Зарегистрироваться'
          >
            {buttonText || 'Войти'}
          </button>
        </form>

        <p className='data-access__text'>
          {question}{' '}
          <Link to={link} className='data-access__link link'>
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default DataAccessForm;
