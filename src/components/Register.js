import React from 'react';
import UserForm from './UserForm';
import api from "../utils/api";
import {tooltipConfig} from '../utils/constants';

function Register({classMod, formName, title, btnCaption}) {
  const [Tooltip, setTooltip] = React.useState({
    className: '',
    title: '',
    icon: ''
  });
  const [IsTooltipOpen, setTooltipVisibility] = React.useState(false);
  const refs = {
    password: React.useRef(''),
    email: React.useRef('')
  };

  function handleTooltipVisibility() {
    if(IsTooltipOpen) {
      setTooltipVisibility(false);
    } else {
      setTooltipVisibility(true);
    }
  }

  function handleChange(e) {
    const {name, value} = e.target;
    refs[name] = value;
  }

  function handleSubmit(e){
    e.preventDefault()
    const { password, email } = refs;
    api.signupUser({
      password: password,
      email: email
    })
      .then(res => {
        console.log(res);
        setTooltip(tooltipConfig.success);
        setTooltipVisibility(true);
        Object.keys(refs).forEach(refsItem => {
          refs[refsItem].current.value = '';
        });
      })
      .catch(err => {
        console.log(err);
        setTooltip(tooltipConfig.error);
        setTooltipVisibility(true);
      });
  }

  return (
    <UserForm classMod={classMod} formName={formName} title={title} btnCaption={btnCaption} tooltip={Tooltip} isOpen={IsTooltipOpen} onClose={handleTooltipVisibility} onSubmit={handleSubmit}>
      <div className="form__field-holder">
        <input className="form__field form__field_color_white" name="email" minLength="2" type="email" placeholder="Email" ref={refs.email} onChange={handleChange} required />
        <div className="form__error email-error"></div>
      </div>
      <div className="form__field-holder">
        <input className="form__field form__field_color_white" name="password" minLength="9" type="password" placeholder="Пароль" ref={refs.password} onChange={handleChange} required />
        <div className="form__error password-error"></div>
      </div>
    </UserForm>
  );
}

export default Register;
