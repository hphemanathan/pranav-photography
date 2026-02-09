import React from 'react';
// import style from "./Header.module.css";


function Header() {
  return (
    <div className='flex items-center pt-5'>
      <div className='w-[100px]'>
        <img src='src/assets/Logo.png' alt='Logo' />
      </div>

      <div className='flex flex-1 gap-3 m-auto justify-center'>
        <a href=''>Services</a>
        <a>Packages</a>
        <a>My works</a>
        <a>Who I am</a>
      </div>
      <p className='flex justify-end w-[100px]'>Book now</p>
    </div>
  );
}

export default Header;
