import React from 'react';
import BgVideo from '../../../video.mp4';
import style from "./HeroSection.module.css";



function HeroSection() {
  return (
    <div>
      <h1>Pranav Photography</h1>
      <video className={style.bgVideo} autoPlay loop muted >
        <source src={BgVideo} type='video/mp4' />{" "}
      </video>
    </div>
  );
}

export default HeroSection;
