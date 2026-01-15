import React from 'react';
import style from "./Header.module.css";


function Header() {
  return (
    <div className={style.header} >
      <div className='logo'>
        <img src='src/assets/Logo.png' alt='Logo' />
      </div>
      <div className='flex'>
        <p>Services</p>
        <p>My works</p>
        <p>Who I am</p>
        <div>
          <p>Book now</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
