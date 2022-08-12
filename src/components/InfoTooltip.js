import React from 'react';
import iconClose from '../images/icons/icon-close.svg';

function InfoTooltip({tooltip, isOpen, onHandleVisibility}) {
  return (
    <div className={`modal modal_target_${tooltip.className} ${isOpen && 'modal_visible'}`}>
      <div className="modal__content modal__content_display_flex">
        <button className="modal__close" type="button" onClick={onHandleVisibility}>
          <img className="modal__close-icon" src={iconClose} alt="Закрыть всплывающее окно" />
        </button>
        <div className="modal__response">
          <img className="modal__response-icon" src={tooltip.icon} alt={tooltip.title} />
        </div>
        <h2 className="modal__title modal__title_align_center modal__title_mb_none">{tooltip.title}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;