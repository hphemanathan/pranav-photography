import React from 'react';
import { Menu } from 'lucide-react';
import NavMobile from '../NavMobile/NavMobile';



function HeaderMobile({ openMenu, setOpenMenu }) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <a className='w-[75px]'>
          <img src='src/assets/Logo.png' alt='Company Logo' />
        </a>
        <Menu onClick={ () => {
          setOpenMenu(!openMenu)
        } } />
      </div>
    </div>
  );
}

export default HeaderMobile;
