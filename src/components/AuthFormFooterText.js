import React from 'react';
import { NavLink } from 'react-router-dom';

function AuthFormFooterText() {
  return (
    <p className="form__footer-text">
      Уже зарегистрированы? <NavLink to="/sign-in" className="form__footer-link">Войти</NavLink>
    </p>
  );
}

export default AuthFormFooterText;
