import React from 'react';
import '../DataAccessForm/DataAccessForm.css';
import DataAccessForm from '../DataAccessForm/DataAccessForm';

function Login() {
  return (
    <DataAccessForm
      greeting='Рады видеть!'
      formName='login'
      addUserName={false}
      buttonText='Войти'
      question='Еще не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    />
  );
}

export default Login;
