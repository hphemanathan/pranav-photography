import React from 'react';
import BgVideo from '../../../video.mp4';
import style from "./HeroSection.module.css";
import Header from '../Header/Header';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/src/SplitText.js";
gsap.registerPlugin(useGSAP);






function HeroSection() {
  
 

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
      <HeaderMobile/>

      <div
        className='flex flex-col'>
        <h1 className=' heading font uppercase text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.1] font-bold'>
          Pranav Photography
        </h1>
        <h2 className='text-[clamp(1.75rem,5vw,2.25rem)]'>
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
