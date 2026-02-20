import React from 'react';
import { X } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Transition } from 'react-transition-group';




function NavMobile({openMenu, setOpenMenu}) {
 
  


  return (
    <Transition
    mountOnEnter
    unmountOnExit
    in={openMenu}
    addEndListener={(node, done) => {
      const ctx = gsap.context ( ( ) => {
        if (openMenu) {
          gsap.to (".menu", {x:"-50"})
        }
      },

      node)
    }

    }
    
    >
      <div className='z-50 bg-lightTaupe-500 h-svh absolute top-0 left-0 w-svw basic-transition menu'>
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
    </Transition>
  );
}

export default NavMobile;
