import React from 'react';
import '../DataAccessForm/DataAccessForm.css';
import DataAccessForm from '../DataAccessForm/DataAccessForm';

function Register() {
  return (
    <DataAccessForm
      greeting='Добро пожаловать!'
      formName='register'
      addUserName={true}
      buttonText='Зарегистрироваться'
      question='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
    />
  );
}

export default Register;
