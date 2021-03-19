import React from 'react';
import './hero.styles.scss';


const Hero = () => {
    return (
      <div>
<section class="hero is-large is-info hero-image">
  <div class="hero-body">
      <div className='container'>
    <h1 className='hero-title'>
    START YOUR PROJECT, NOW.
    </h1>
    <div className='try-now-btn'>
    <button className='button is-black' id='try-now'>
      TRY NOW
    </button>
  </div>
  </div>
  </div>
  </section>
  <section class="hero is-large is-info hero-img">
  <div class="hero-body">
      <div className='container'>
    <p className='hero-par'>
    Our project aims to shortcut and merge two phases which are prototyping and industrialization of your product to fit your needs, much more than just design software, it's a digital interconnection platform for the fashion industry.
    </p>
  
  </div>
  </div>
</section>
</div>
    );
}

export default Hero;