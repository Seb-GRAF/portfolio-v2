import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Skill = ({ name, icon }) => {
  return (
    <div className='skill'>
      <i className={`${icon} colored`}></i>
      <p>{name}</p>
    </div>
  )
}

const SkillsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement)]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='skills'>
      <div className='skills-carousel' ref={emblaRef}>
        <div className='skills-carousel__container'>
          <Skill name='react' icon='devicon-react-original' />
          <Skill name='nextjs' icon='devicon-nextjs-line' />
          <Skill name='javascript' icon='devicon-javascript-plain' />
          <Skill name='sass' icon='devicon-sass-original' />
          <Skill name='html5' icon='devicon-html5-plain' />
          <Skill name='css3' icon='devicon-css3-plain' />
          <Skill name='git' icon='devicon-git-plain' />
          <Skill name='webpack' icon='devicon-webpack-plain' />
          <Skill name='jest' icon='devicon-jest-plain' />
          <Skill name='npm' icon='devicon-npm-original-wordmark' />
          <Skill name='mongodb' icon='devicon-mongodb-plain' />
        </div>
      </div>
      <button className='skills-carousel__prev' onClick={scrollPrev}>
        <svg
          className='embla__button__svg'
          viewBox='137.718 -1.001 366.563 644'>
          <path
            fill='currentColor'
            d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z'
          />
        </svg>
      </button>
      <button className='skills-carousel__next' onClick={scrollNext}>
        <svg className='embla__button__svg' viewBox='0 0 238.003 238.003'>
          <path
            fill='currentColor'
            d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z'
          />
        </svg>
      </button>
    </div>
  )
}

const About = () => {
  useEffect(() => {}, [])

  return (
    <section className='about' id='about'>
      <div className='about__wrapper'>
        <h2 className='about__title'>
          <span>01.</span>
          <span>About</span>
        </h2>
        <div className='about__text'>
          <p>
            <i>
              Growing up, I always had an affinity for tech and computers.
              Jailbreaking my first iPod, installing custom ROMs on my android
              phones or learning to use Adobe Photoshop and AfterEffect at a
              young age were some of the things that made me proficient with
              technologies.
            </i>
          </p>
          <p>
            Today I&apos;m enthralled by <b>web development</b>, creating new
            products, experiences and designs, always keeping an eye out for
            details to enhance the user experience.
          </p>
          <p>
            I work with <b>React</b>, <b>Next.JS</b>, <b>JavaScript (ES6+)</b>,{' '}
            <b>CSS</b> and <b>HTML</b> to deliver quality front-end products. I
            also acquired some base knowledge of <b>NodeJS</b> and{' '}
            <b>EXPRESS</b> to better understand backend.
          </p>
        </div>

        <SkillsCarousel />
      </div>
    </section>
  )
}

export default About
