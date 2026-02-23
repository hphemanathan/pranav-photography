import React from 'react';
import { Menu } from 'lucide-react';
import NavMobile from '../NavMobile/NavMobile';




function HeaderMobile({ toggleModal}) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <a className='w-[75px]'>
          <img src='src/assets/Logo.png' alt='Company Logo' />
        </a>
        <button onClick={toggleModal}>
          <Menu />
        </button>
      </div>
    </div>
  );
}

export default HeaderMobile;
