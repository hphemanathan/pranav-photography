import React from 'react';
import { Transition } from 'react-transition-group';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from 'lucide-react';

function NavMobile({openMenu, setOpenMenu, menuRef}) {
    gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP(  );

  const onEnter = contextSafe(() => {
    gsap.from(
      menuRef.current, {
        xPercent:100,
        duration:0.7,
        ease:"power2.out"
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
   <div
            ref={menuRef}
            className="z-50 bg-OffWhite-500 h-svh absolute top-0 left-0 w-svw basic-transition menu"
          >
            <X
              className="absolute top-[16px] right-[16px]"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            />
            <div className="flex flex-col justify-center items-center h-svh gap-4">
              <a href="">Services</a>
              <a>Packages</a>
              <a>My works</a>
              <a>Who I am</a>
            </div>
          </div>
     </Transition>
  )
}

export default NavMobile;
