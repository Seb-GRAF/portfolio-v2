import React, { useEffect } from 'react'
import Head from 'next/head'

import { Hero, About, Projects, Contact, AnimateIn } from '../components'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import SplitText from 'gsap/dist/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

export const Home = () => {
  // animate hero section on load
  useEffect(() => {
    const animateIntro = () => {
      const hero = document.querySelector('.hero__main')

      const split = new SplitText(hero.querySelectorAll('.paragraph'), {
        type: 'chars',
      })

      gsap.from(split.chars, {
        y: '100%',
        stagger: '0.04',
        duration: '1',
        ease: 'power3',
        delay: '0.2',
      })
      gsap.from('.nav__link', {
        y: '-100%',
        opacity: 0,
        duration: '1',
        ease: 'power3',
        delay: '1',
        stagger: '0.2',
      })
      gsap.from('.divider-line, .divider-text', {
        y: '100%',
        opacity: 0,
        duration: '1',
        ease: 'power3',
        delay: '1.5',
        stagger: '0.2',
      })
    }

    window.addEventListener('load', animateIntro)
    return () => {
      window.removeEventListener('load', animateIntro)
    }
  }, [])

  // scroll trigger animation
  useEffect(() => {
    //dark bg + light nav
    gsap.to('html', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      color: '#f3f5fa',
      backgroundColor: '#191919',
    })
    gsap.to('header', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      color: '#f3f5fa',
    })
    gsap.to('.line1, .line2', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      backgroundColor: '#f3f5fa',
    })
    gsap.to('.nav__menu', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      backgroundColor: '#191919',
    })

    //projects animations
    gsap.utils.toArray('.project__description').forEach((description) => {
      gsap.to(description, {
        scrollTrigger: {
          trigger: description,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        translateY: window.innerWidth < 768 ? '-10%' : '-30%',
      })
    })

    // change background color when nearing contact section
    gsap.to('.projects', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'center bottom',
        end: '+=1',
        scrub: true,
      },
      backgroundColor: '#191919',
    })
    gsap.to('body', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'center bottom',
        end: '+=1',
        scrub: true,
      },

      backgroundColor: '#fdffc3',
    })

    // contact animation
    gsap.to('.projects', {
      scrollTrigger: {
        trigger: '.contact',
        start: window.innerWidth < 768 ? 'top-=20% bottom' : 'top bottom',
        end: 'top top',
        scrub: true,
      },
      scale: window.innerWidth < 768 ? 0.8 : 0.9,
      ease: 'power2.inOut',
    })

    return () => {
      // kills all scroll triggers on dismount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Head>
        <title>SG | Frontend Developer</title>
        <meta
          name='description'
          content="Hey, I'm Seb, a frontend developer based in Switzerland. You can check out some of my projects on this website as well as my personal blog!"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='home'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Home
