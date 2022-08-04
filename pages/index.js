import React, { useEffect, useContext, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
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
  const windowSize = useWindowSize()

  const { isDarkTheme } = useContext(ThemeContext)
  const [isMobile, setIsMobile] = useState(windowSize.width < 768)

  useEffect(() => {
    if (windowSize.width < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowSize])

  // intro animation
  useEffect(() => {
    const split = new SplitText(document.querySelectorAll('.title'), {
      type: 'lines',
    })

    gsap.set('.title', {
      opacity: '1',
    })

    gsap.from(split.lines, {
      y: '100%',
      stagger: '0.1',
      duration: 1.2,
      ease: 'power3',
      delay: 0.2,
    })

    gsap.to('.hero__vector', {
      opacity: 1,
      duration: '1',
      ease: 'power3',
      delay: 0.1,
    })

    gsap.to('.about', {
      translateY: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3',
      delay: 0.1,
    })

    // kill all scroll triggers when dismounting component
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // scroll trigger animations
  useEffect(() => {
    // Dark bg switch (on light theme)
    if (!isDarkTheme) {
      gsap.set('.home', {
        color: '#2c2c2c',
        backgroundColor: '#fff',
      })
      gsap.to('.home', {
        scrollTrigger: {
          trigger: '.projects',
          start: 'top+=10% bottom',
          end: '+=1',
          scrub: true,
          immediateRender: false,
          lazy: true,
        },

        color: '#ffffff',
        backgroundColor: '#242424',
      })
    } else {
      gsap.set('.home', {
        color: '#fff',
        backgroundColor: '#242424',
      })
    }

    //projects parallax
    gsap.utils.toArray('.project__description').forEach((description) => {
      gsap.set(description, {
        y: isMobile ? '-10%' : '30%',
      })

      gsap.to(description, {
        scrollTrigger: {
          trigger: description,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: isMobile ? '-20%' : '-30%',
      })
    })

    // contact animation
    gsap.to('.home', {
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
      // kills all scroll triggers when updating dark theme
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isDarkTheme, isMobile])

  return (
    <>
      <SEO />
      <div className='home'>
        <Hero />
        <About />
        <Projects />
        <Blogs recentPosts={recentPosts} />
      </div>
      <Contact />
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
