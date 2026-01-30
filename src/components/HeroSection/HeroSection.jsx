import React from 'react';
import BgVideo from '../../../video.mp4';
import style from "./HeroSection.module.css";
import Header from '../Header/Header';



function HeroSection() {
  return (
    <div className='h-svh'>
      <Header/>
      <h1>Pranav Photography</h1>
      <video className={style.bgVideo} autoPlay loop muted >
        <source src={BgVideo} type='video/mp4' />{" "}
      </video>
    </div>
  );
}

export default HeroSection;
