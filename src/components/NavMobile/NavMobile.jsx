import React from 'react';
import { X } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Transition } from 'react-transition-group';


function NavMobile({openMenu, setOpenMenu}) {

  const menuRef = React.useRef()
  const { contextSafe } = useGSAP;


  const onEnter = contextSafe ( ( ) => {
    gsap.fromTo (menuRef.current, 
      {x:'-100%'},
      {x: '0%', duration : 0.3, ease: "power3.Out"}

    )
  }

  )


  return (
    <Transition
    in={openMenu}
    timeout={300}
    unmountOnExit
  onEnter={onEnter}    
    >
      <div
        ref={menuRef}
        className='z-50 bg-lightTaupe-500 h-svh absolute top-0 left-0 w-svw'>
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
