import React from 'react';
import './Hero.css';
import jewellery_icon from '../assets/jewellery-icon.png';
import arrow_icon from '../assets/arrow.png';
import handwave from '../assets/handwave.png';

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="handwave">
                        <p>new</p>
                        <img src={handwave} className='handwaveimg' alt="waving hand" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow pointing right" />
                </div>
            </div>    
            <div className="hero-right">
                <img src={jewellery_icon} alt="jewellery icon" />
            </div>
        </div>
    );
}

export default Hero;

