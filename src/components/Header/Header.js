import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>facebook</h1>
      <div className="profile">
        <div className="profile__link">
          Meu perfil
        </div>
        <div className="profile__icon">
          :D          
        </div>
      </div>
    </header>
  );
}

export default Header;