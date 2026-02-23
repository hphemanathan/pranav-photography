import React, { useEffect } from 'react';
import { X } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Transition } from 'react-transition-group';

import { createPortal } from "react-dom";


gsap.registerPlugin(useGSAP);




function NavMobile({ show = false, close }) {

   const nodeRef = React.useRef(null);




  // React.useEffect (() => {
  
  // console.log(menuRef)
  // }
  // )

  return createPortal(
    <Transition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={show}
      addEndListener={(done) => {
        const ctx = gsap.context(() => {
          if (show) {
            gsap.set('#modal', {
                xPercent: 100,
                duration: 0.65,
                ease: "power3.out",});
            gsap
              .timeline({ onComplete: done })
              .to("#overlay", { autoAlpha: 0.65, duration: 0.1 })
              .to("#modal", { autoAlpha: 1, xPercent: 0, duration: 0.65 }, 0);


              gsap.to('#modal', {
                x: 0,
                duration: 0.4,
                ease: "power3.out",
              });
          } else {
            gsap
              .timeline({ onComplete: done })
              .to("#modal", { autoAlpha: 0, y: -50, duration: 0.25 })
              .to("#overlay", { autoAlpha: 0, duration: 0.1 }, ">-=0.1");
          }
        });
      }}>
      <div
        ref={nodeRef}
        id='modal'
        className='z-50 bg-lightTaupe-500 h-svh absolute top-0 left-0 w-svw basic-transition menu'>
        <X className='absolute top-[16px] right-[16px]' />
        <div className='flex flex-col justify-center items-center h-svh gap-4'>
          <a href=''>Services</a>
          <a>Packages</a>
          <a>My works</a>
          <a>Who I am</a>
        </div>
      </div>
    </Transition>,
    document.body,
  );
}

export default NavMobile;
