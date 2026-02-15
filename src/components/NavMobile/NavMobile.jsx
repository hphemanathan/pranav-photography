import React from 'react';
import { X } from "lucide-react";


function NavMobile({openMenu, setOpenMenu}) {
  return (
    <div className='z-50 bg-lightTaupe-500 h-svh absolute top-0 left-0 w-svw'>
      <X
        className='absolute top-[16px] right-[16px]'
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      />
      <div className='flex flex-col justify-center items-center h-svh gap-4'>
        <a href=''>Services</a>
        <a>Packages</a>
        <a>My works</a>
        <a>Who I am</a>
      </div>
    </div>
  );
}

export default NavMobile;
