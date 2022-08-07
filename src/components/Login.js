import React from 'react';
import UserForm from './UserForm';

function Login({classMod, formName, title, btnCaption, onSubmit}) {
  return (
    <UserForm classMod={classMod} formName={formName} title={title} btnCaption={btnCaption} onSubmit={onSubmit}>
      <div className="form__field-holder">
        <input className="form__field form__field_color_white" name="email" minLength="2" type="email" placeholder="Email" required />
        <div className="form__error email-error"></div>
      </div>
      <div className="form__field-holder">
        <input className="form__field form__field_color_white" name="password" minLength="9" type="password" placeholder="Пароль" required />
        <div className="form__error password-error"></div>
      </div>
    </UserForm>
  );
}

export default Login;
