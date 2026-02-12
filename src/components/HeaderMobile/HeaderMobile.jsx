import React from 'react';
import { Menu } from 'lucide-react';
import NavMobile from '../NavMobile/NavMobile';

function HeaderMobile() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='w-[75px]'>
          <img src='src/assets/Logo.png' alt='Company Logo' />
        </div>
        <Menu  />
        <NavMobile/>
        

       
      </div>
    </div>
  );
}

export default HeaderMobile;
