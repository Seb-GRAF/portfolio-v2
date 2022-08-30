import React, { useEffect } from 'react'
import { Header } from './'
import { useRouter } from 'next/router'
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function enter(node) {
  window.scrollTo(0, 0)
  gsap.fromTo(
    node,
    {
      y: 50,
      autoAlpha: 0,
      ease: 'power3.out',
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out',
    }
  )
}

function exit(node) {
  gsap.fromTo(
    node,
    {
      y: 0,
      autoAlpha: 1,
      ease: 'power3.out',
    },
    {
      y: -50,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    }
  )
}

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Header />
      <SwitchTransition>
        <Transition
          key={router.asPath}
          timeout={700}
          in={true}
          onEnter={enter}
          onExit={exit}
          mountOnEnter={true}
          unmountOnExit={true}>
          <main>{children}</main>
        </Transition>
      </SwitchTransition>
      <footer>
        <p>&copy; Copyright 2022, Sebastien Graf</p>
        <a
          href='https://github.com/seb-graf/portfolio-v2'
          aria-label='source code of my portfolio'>
          My portfolio is open source
        </a>
      </footer>
    </>
  )
}

export default Layout
