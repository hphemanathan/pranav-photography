import React from 'react';
import BgVideo from '../../../video.mp4';
import style from "./HeroSection.module.css";
import Header from '../Header/Header';



function HeroSection() {
  return (
    <div className='flex justify-between flex-col h-svh items-center'>
      <Header />

      <div
        className='flex justify-center items-center flex-col'>
        <h1 className=' font uppercase text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.1] font-bold'>
          Pranav Photography
        </h1>
        <h2 className='text-[clamp(1.75rem,5vw,2.25rem)]'>
          Timeless Moments, Artfully Captured.
        </h2>
      </div>
      <p>Scroll to explore</p>
      <video className={style.bgVideo} autoPlay loop muted>
        <source src={BgVideo} type='video/mp4' />{" "}
      </video>
    </div>
  );
}

export default HeroSection;
