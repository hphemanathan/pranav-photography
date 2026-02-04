import React from 'react';
import style from "./Header.module.css";


function Header() {
  return (
    <div className='px-4 flex items-center justify-center m-auto'>
      <div className='w-[200px]'>
        <img src='src/assets/Logo.png' alt='Logo' />
      </div>

      <div className='flex m-auto gap-4'>
        <a href=''>Services</a>
        <a>packages</a>
        <a>My works</a>
        <a>Who I am</a>
      </div>

      <div className='mr-4'>
        <p>Book now</p>
      </div>
    </div>
  );
}

export default Header;
