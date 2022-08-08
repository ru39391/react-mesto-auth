import React from 'react';
import headerLogo from '../images/header/header__logo.svg';

function Header({children}) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={headerLogo} alt="Место" />
        {children}
      </div>
    </header>
  );
}
  
export default Header;