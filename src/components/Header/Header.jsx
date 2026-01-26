import React from 'react';
import style from "./Header.module.css";


function Header() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[150px]'>
        <img src='src/assets/Logo.png' alt='Logo' />
      </div>

      <div className='flex m-auto'>
        <p>Services</p>
        <p>packages</p>
        <p>My works</p>
        <p>Who I am</p>
      </div>

      <div className='mr-4'>
        <p>Book now</p>
      </div>
    </div>
  );
}

export default Header;
