import React from 'react';
// import style from "./Header.module.css";


function Header() {
  return (
    <div className='flex items-center w-svw justify-between'>
      <div className='w-[70px]'>
        <img src='src/assets/Logo.png' alt='Logo' />
      </div>

      <div className='flex gap-3'>
        <a href=''>Services</a>
        <a>Packages</a>
        <a>My works</a>
        <a>Who I am</a>
      </div>    
        <p>Book now</p>
      
    </div>
  );
}

export default Header;
