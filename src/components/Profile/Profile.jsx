import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit() {
    setIsEdit(true);
  }

  function handleSave(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValue, setFormValue] = useState({
    name: '',
    email: ''
  });

  function handleChange(e) {
    const input = e.target;
    const { value, name } = input;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  return (
    <>
      <Header />
      <main className='profile'>
        <section className='profile__box'>
          <h1 className='profile__header'>Привет, Виталий!</h1>

          <form className='profile__form' id='form' noValidate>
            <label className='profile__label'>
              Имя
              <input
                className={`profile__input ${errors.name ? 'profile__input_type_error' : ''}`}
                type='text'
                name='name'
                id='name'
                minLength='2'
                maxLength='40'
                required
                onChange={handleChange}
                value={formValue.name || 'Виталий'}
              />
            </label>
            <span
              className={`profile__input-error ${
                !isValid ? 'profile__input-error_type_active' : ''
              }`}
            >
              {errors.name}
            </span>
            <label className='profile__label'>
              E-mail
              <input
                className={`profile__input ${errors.email ? 'profile__input_type_error' : ''}`}
                type='email'
                name='email'
                id='email'
                minLength='5'
                maxLength='40'
                required
                onChange={handleChange}
                value={formValue.email || 'pochta@yandex.ru'}
              />
            </label>
            <span
              className={`profile__input-error ${
                !isValid ? 'profile__input-error_type_active' : ''
              }`}
            >
              {errors.email}
            </span>
          </form>

          <div className={`profile__buttons ${isEdit ? 'profile__buttons_type_hide' : ''}`}>
            <button
              className='profile__edit-button button'
              type='button'
              aria-label='Редактировать профиль'
              onClick={handleEdit}
            >
              Редактировать
            </button>
            <Link to='/' className='profile__logout-link link'>
              Выйти из&nbsp;аккаунта
            </Link>
          </div>
          <div className={`profile__buttons ${!isEdit ? 'profile__buttons_type_hide' : ''}`}>
            <span className={`profile__error ${!isValid ? 'profile__error_type_active' : ''}`}>
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className={`profile__save-button button ${
                !isValid ? 'profile__save-button_type_disabled' : ''
              }`}
              type='submit'
              aria-label='Сохранить'
              onClick={handleSave}
            >
              Сохранить
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
