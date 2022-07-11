import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero__main'>
        <h1 className='hero__paragraph'>
          <span className='paragraph__wrapper'>
            <span className='paragraph'>Graf</span>
          </span>
          <span className='paragraph__wrapper'>
            <span className='paragraph'>Sebastien</span>
          </span>
          <span className='paragraph__wrapper'>
            <span className='paragraph'>Frontend</span>
          </span>
          <span className='paragraph__wrapper'>
            <span className='paragraph'>Developer</span>
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

      <div className='divider'>
        <div className='divider-line'></div>
      </div>
    </section>
  )
}

export default Hero
