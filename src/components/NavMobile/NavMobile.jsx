import React from 'react';
import { Transition } from 'react-transition-group';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function NavMobile({openMenu, setOpenMenu, menuRef}) {
    gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP(  );

  const onEnter = contextSafe(() => {
    gsap.from(
      menuRef.current, {
        xPercent:-200
      }
    )
  });

  return (

    <Transition
    in={openMenu}
    nodeRef={menuRef}
    mountOnEnter={true}
    onEnter={onEnter}
    >
  <div ref={menuRef} className='h-svh bg-OffWhite-500'>
    <p>test</p>
  </div>
     </Transition>
  )
}

export default NavMobile;
