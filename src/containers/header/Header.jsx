import React from 'react';
import nightSky from '../../assets/night_sky1.jpg';
import skyLine from '../../assets/nyc_skyline2.png';
import './header.css';

const Header = () => {
  let nightsky = document.getElementById("nightSky");
  let skyline = document.getElementById("skyLine");
  let rates = {
    nightsky: 0.05,
    skyline: 0.15,
  }
  const handleScroll = () => {
    
    let scrollDistance = window.scrollY;

    nightsky.style.top = scrollDistance * rates.nightsky + 'px';
    skyline.style.top = -scrollDistance * rates.skyline + 'px';
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div className='about' id='about'>
        <img src={nightSky} alt="night sky" id='nightSky'/>
        <img src={skyLine} alt="nyc skyline" id='skyLine'/>

        <h1>Hi! I'm Emily Lin</h1>
        
    </div>
  )
}

export default Header
