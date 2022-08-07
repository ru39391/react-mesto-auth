import React from 'react';
import headerLogo from '../images/header/header__logo.svg';
import iconShow from '../images/icons/icon-show.svg';
import iconClose from '../images/icons/icon-close.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={headerLogo} alt="Место" />
        {/*
        <div className="header__meta">
          <span className="header__link header__link_fs_default">email@mail.com</span>
          <a className="header__link header__link_fs_default header__link_color_light" href="#">Регистрация</a>
        </div>

        <button className="header__toggler" type="button">
          <img className="header__toggler-icon" src={iconShow} alt="Показать меню" />
          <img className="header__toggler-icon header__toggler-icon_invisible" src={iconClose} alt="Скрыть меню" />
        </button>
        */}
      </div>
    </header>
  );
}
  
export default Header;