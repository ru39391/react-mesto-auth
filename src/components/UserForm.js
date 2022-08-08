import React from 'react';
import InfoTooltip from './InfoTooltip';
import UserFormFooterText from './UserFormFooterText';

function UserForm({classMod, formName, title, btnCaption, children, tooltip, isOpen, onClose, onSubmit}) {
  return (
    <>
      <form className={`form form_container ${classMod}`} name={formName} onSubmit={onSubmit} action="#">
        <div className="form__wrapper">
          <div className="form__title form__title_color_white">{title}</div>
          <fieldset className="form__body form__body_height_max">
            {children}
          </fieldset>
          <div className="form__footer">
            <button className="form__button form__button_bg_white" type="submit">
              <span className="form__button-caption">{btnCaption}</span>
              <span className="form__button-loading"></span>
            </button>
            {formName === `signup` && <UserFormFooterText /> }
          </div>
        </div>
      </form>
      <InfoTooltip title={tooltip.title} className={tooltip.className} icon={tooltip.icon} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default UserForm;