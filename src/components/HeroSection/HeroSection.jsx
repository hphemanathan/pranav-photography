import React from 'react';

function HeroSection() {
  return (
    <div>
      <p>Pranav Photography</p>
      <video autoPlay loop muted className='bg-vid'>
        <source src={BgVideo} type='video/mp4' />{" "}
      </video>
    </div>
  );
}

export default HeroSection;
