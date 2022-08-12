import React from 'react';
import UserForm from './UserForm';
import TooltipContext from '../contexts/TooltipContext';

function Register({classMod, formName, title, btnCaption, isOpen, onHandleVisibility, onUpdateTooltip}) {
  const tooltip = React.useContext(TooltipContext);

  const refs = {
    password: React.useRef(''),
    email: React.useRef('')
  };

  function handleChange(e) {
    const {name, value} = e.target;
    refs[name] = value;
  }

  function handleSubmit(e){
    e.preventDefault()
    const { password, email } = refs;
    onUpdateTooltip({
      password: password,
      email: email
    });
  }
  
  React.useEffect(() => {
    Object.keys(refs).forEach(refsItem => {
      refs[refsItem].current.value = '';
    });
  }, [refs, isOpen]); 

  return (
    <UserForm classMod={classMod} formName={formName} title={title} btnCaption={btnCaption} tooltip={tooltip} isOpen={isOpen} onHandleVisibility={onHandleVisibility} onSubmit={handleSubmit}>
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
