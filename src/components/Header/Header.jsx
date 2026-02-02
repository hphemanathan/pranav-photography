import React from 'react';
import stylefrom "./Header.module.css";


function Header() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[150px]'>
        <img src='src/assets/Logo.png' alt='Logo' />
      </div>

      <div className='flex m-auto'>
        <a href=''>Services</a>
        <a>aackages</a>
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
