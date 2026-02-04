import React from 'react';
import BgVideo from '../../../video.mp4';
import style from "./HeroSection.module.css";
import Header from '../Header/Header';



function HeroSection() {
  return (
    <div className='h-svh relative'>
      <Header />

      <div
        className='absolute top-[50%] left-[50%] translate-[-50%] translate-[-50%]
 m-auto text-center'>
        <h1 className=' uppercase text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.1] font-bold'>
          Pranav Photography
        </h1>
        <h2>Timeless Moments, Artfully Captured.</h2>
      </div>
      <video className={style.bgVideo} autoPlay loop muted>
        <source src={BgVideo} type='video/mp4' />{" "}
      </video>
    </div>
  );
}

export default HeroSection;
