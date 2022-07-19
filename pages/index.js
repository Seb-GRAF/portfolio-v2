import React, { useEffect } from 'react'
import { getRecentPosts } from '../services'
import { Hero, About, Projects, Contact, SEO, Blogs } from '../components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import SplitText from 'gsap/dist/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

export const Home = ({ recentPosts }) => {
  const animateIntro = () => {
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
      delay: '0.2',
    })

    gsap.to('.hero__vector, .about', {
      opacity: 1,
      duration: '1',
      ease: 'power3',
    })
  }

  // scroll trigger animations
  useEffect(() => {
    // setTimeout(() => {
    animateIntro()
    // }, 500)

    //dark bg + light nav
    gsap.to('html', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      color: '#ffffff',
      backgroundColor: '#191919',
    })
    gsap.to('header', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      color: '#ffffff',
    })
    gsap.to('.line1, .line2', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top+=10% bottom',
        end: '+=1',
        scrub: 1.5,
      },

      backgroundColor: '#ffffff',
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
    gsap.to('.projects, .blogs', {
      scrollTrigger: {
        trigger: '.blogs',
        start: 'top bottom',
        end: '+=1',
        scrub: true,
      },
      backgroundColor: '#191919',
    })
    gsap.set('footer', {
      backgroundColor: '#fdffc3',
      color: '#191919',
    })

    // contact animation
    gsap.to('.blogs', {
      scrollTrigger: {
        trigger: '.contact',
        start:
          window.innerWidth > 768 ? 'center+=10% bottom' : 'center-=10% bottom',
        end: '+=300',
        scrub: true,
      },
      scale: window.innerWidth > 768 ? 0.9 : 0.8,
      ease: 'power2.inOut',
    })

    return () => {
      // sets footer to base color
      gsap.set('footer', {
        backgroundColor: 'inherit',
        color: 'inherit',
      })

      // kills all scroll triggers on dismount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

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
