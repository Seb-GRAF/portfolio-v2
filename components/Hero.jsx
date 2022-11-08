import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className='hero'
      id='hero'>
      <h1 className='sr-only__title'></h1>
      <div className='hero__main'>
        <div className='hero__title'>
          <span className='title__wrapper'>
            <span className='title'>Graf</span>
          </span>
          <span className='title__wrapper'>
            <span className='title'>Sebastien</span>
          </span>
          <span className='title__wrapper'>
            <span className='title'>Web</span>
          </span>
          <span className='title__wrapper'>
            <span className='title'>Developer</span>
          </span>
          <figure className='hero__vector'>
            <Image
              src='/wave.svg'
              alt=''
              layout='fill'
              objectFit='contain'
              priority='true'
              className='hero__vector-image'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
