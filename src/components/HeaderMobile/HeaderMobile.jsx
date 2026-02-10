import React from 'react';
import { Menu } from 'lucide-react';

function HeaderMobile() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='w-[75px]'>
          <img src='src/assets/Logo.png' alt='Company Logo' />
        </div>
        <Menu  />
      </div>
    </div>
  );
}

export default HeaderMobile;
