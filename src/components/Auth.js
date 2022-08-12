import React from 'react';
import InfoTooltip from './InfoTooltip';
import AuthFormFooterText from './AuthFormFooterText';
import TooltipContext from '../contexts/TooltipContext';

function Auth({classMod, formName, title, btnCaption, isOpen, onHandleVisibility, onUpdateTooltip}) {
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
    <>
      <form className={`form form_container ${classMod}`} name={formName} onSubmit={handleSubmit} action="#">
        <div className="form__wrapper">
          <div className="form__title form__title_color_white">{title}</div>
          <fieldset className="form__body form__body_height_max">
            <div className="form__field-holder">
              <input className="form__field form__field_color_white" name="email" minLength="2" type="email" placeholder="Email" ref={refs.email} onChange={handleChange} required />
              <div className="form__error email-error"></div>
            </div>
            <div className="form__field-holder">
              <input className="form__field form__field_color_white" name="password" minLength="9" type="password" placeholder="Пароль" ref={refs.password} onChange={handleChange} required />
              <div className="form__error password-error"></div>
            </div>
          </fieldset>
          <div className="form__footer">
            <button className="form__button form__button_bg_white" type="submit">
              <span className="form__button-caption">{btnCaption}</span>
              <span className="form__button-loading"></span>
            </button>
            {formName === `signup` && <AuthFormFooterText /> }
          </div>
        </div>
      </form>
      <InfoTooltip tooltip={tooltip} isOpen={isOpen} onHandleVisibility={onHandleVisibility} />
    </>
  );
}

export default Auth;
