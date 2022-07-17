import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero__main'>
        <h1 className='hero__title'>
          <span className='title__wrapper'>
            <span className='title'>Graf</span>
          </span>
          <span className='title__wrapper'>
            <span className='title'>Sebastien</span>
          </span>
          <span className='title__wrapper'>
            <span className='title'>Frontend</span>
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
        </h1>
      </div>
    </section>
  )
}

export default Hero
