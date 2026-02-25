import React from 'react';
import BgVideo from '../../../video.mp4';
import style from "./HeroSection.module.css";
import Header from '../Header/Header';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/src/SplitText.js";
import NavMobile from '../NavMobile/NavMobile';
import { Transition } from 'react-transition-group';
import Modal from '../NavMobile/NavMobile';
gsap.registerPlugin(useGSAP);







function HeroSection() {  
     const menuRef = React.useRef();

   const [openMenu, setOpenMenu] = React.useState(false);
  
 


// const onEnter = contextSafe(( ) => {

// gsap.fromTo(
//     menuRef.current,
//     { x: "-100%" },
//     { x: "0%", duration: 0.5, ease: "power3.out" },
//     "-=0.2", // Start slightly before backdrop finishes
//   );
// });



  useGSAP (( ) => {

    // let split = SplitText.create('.heading')
      let split = SplitText.create("h1", { type: "chars" });

    gsap.from(split.chars, {
      // <- selector text, scoped to this component!
      opacity: 0,
      y: 50,
      ease: "back",
      duration: .5,
      stagger: 0.05,
    });
  })



  return (
    <div className='flex justify-between flex-col h-svh mx-5'>
      <HeaderMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {/* <NavMobile
        toggleModal={toggleModal}
        close={toggleModal}
        show={modalVisible}
      /> */}

   
  <NavMobile menuRef={menuRef} openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className='flex flex-col  items-center'>
        <h1 className=' heading self-center text-center font uppercase text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.1] font-bold'>
          Pranav Photography
        </h1>
        <h2 className='text-[clamp(1.75rem,5vw,2.25rem)] self-center text-center'>
          Timeless Moments, Artfully Captured.
        </h2>
      </div>
      <p className='mx-auto pb-5'>Scroll to explore</p>
      <video className={style.bgVideo} autoPlay loop muted>
        <source src={BgVideo} type='video/mp4' />{" "}
      </video>
    </div>
  );
}

export default HeroSection;
