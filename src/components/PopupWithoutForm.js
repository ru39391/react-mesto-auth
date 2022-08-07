import React from 'react';
import iconClose from '../images/icons/icon-close.svg';

function PopupWithoutForm({className, title, icon, isOpen, onClose}) {
  return (
    <div className={`modal modal_target_${className} ${isOpen && 'modal_visible'}`}>
      <div className="modal__content modal__content_display_flex">
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={iconClose} alt="Закрыть всплывающее окно" />
        </button>
        <div className="modal__response">
          <img className="modal__response-icon" src={icon} alt={title} />
        </div>
        <h2 className="modal__title modal__title_align_center modal__title_mb_none">{title}</h2>
      </div>
    </div>
  );
}

export default PopupWithoutForm;