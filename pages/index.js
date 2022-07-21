import React, { useEffect, useContext } from 'react'
import { getRecentPosts } from '../services'
import {
  Hero,
  About,
  Projects,
  Contact,
  SEO,
  Blogs,
  ThemeContext,
} from '../components'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import SplitText from 'gsap/dist/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

export const Home = ({ recentPosts }) => {
  const { isDarkTheme } = useContext(ThemeContext)

  // intro animation
  useEffect(() => {
    const hero = document.querySelector('.hero__main')

    const split = new SplitText(hero.querySelectorAll('.title'), {
      type: 'chars',
    })

    gsap.set('.title', {
      opacity: '1',
    })

    gsap.from(split.chars, {
      y: '100%',
      stagger: '0.04',
      duration: '1',
      ease: 'power3',
      delay: 0.4,
    })

    gsap.to('.hero__vector, .about', {
      opacity: 1,
      duration: '1',
      ease: 'power3',
    })

    // kill all scroll trigger when dismounting component
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // scroll trigger animations
  useEffect(() => {
    //dark bg + light nav
    if (!isDarkTheme) {
      gsap.set('.projects, .about, .hero', {
        color: '#191919',
        backgroundColor: '#fff',
      })
      gsap.to('.projects, .about, .hero', {
        scrollTrigger: {
          trigger: '.projects',
          start: 'top+=10% bottom',
          end: '+=1',
          scrub: true,
        },

        color: '#ffffff',
        backgroundColor: '#191919',
      })
    } else {
      gsap.set('.projects, .about, .hero', {
        color: '#fff',
        backgroundColor: '#191919',
      })
    }

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

    // contact animation
    gsap.to('.blogs', {
      scrollTrigger: {
        trigger: '.contact',
        start: 'center-=30% bottom',
        end: '+=300',
        scrub: true,
      },
      scale: window.innerWidth > 768 ? 0.9 : 0.8,
      ease: 'power2.inOut',
    })

    return () => {
      // kills all scroll triggers on dismount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isDarkTheme])

  return (
    <>
      <SEO />

      <main className='home'>
        <Hero />
        <About />
        <Projects />
        <Blogs recentPosts={recentPosts} />
        <Contact />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const posts = await getRecentPosts()

  return {
    props: {
      recentPosts: posts,
    },
  }
}

export default Home
