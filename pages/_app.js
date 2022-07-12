import '../styles/index.scss'
import { Layout } from '../components'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'

const MyApp = ({ Component, pageProps }) => {
  // init
  useEffect(() => {
    // init smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: 'vertical',
    })
    function raf() {
      lenis.raf()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // // removes preloader after load event
    // const clear = () => {
    // const preloader = document.querySelector('.preloader')

    // gsap.to(preloader, {
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power2',
    // })
    // preloader.style.pointerEvents = 'none'

    // // cursor follower
    // gsap.set('.cursor__follow', { xPercent: -50, yPercent: -50 })
    // let xTo = gsap.quickTo('.cursor__follow', 'x', {
    //     duration: 0.3,
    //     ease: 'power3',
    //   }),
    //   yTo = gsap.quickTo('.cursor__follow', 'y', {
    //     duration: 0.3,
    //     ease: 'power3',
    //   })

    // window.addEventListener('mousemove', (e) => {
    //   xTo(e.clientX)
    //   yTo(e.clientY)
    // })

    // document.querySelectorAll('.link, a, button').forEach((link) => {
    //   link.addEventListener('mouseenter', () => {
    //     gsap.to('.cursor__follow', {
    //       opacity: 1,
    //       width: '4rem',
    //       height: '4rem',
    //       ease: 'power2',
    //       duration: 0.3,
    //     })
    //   })
    //   link.addEventListener('mouseleave', () => {
    //     gsap.to('.cursor__follow', {
    //       opacity: 0,
    //       width: '1rem',
    //       height: '1rem',
    //       ease: 'power2',
    //       duration: 0.3,
    //     })
    //   })
    // })

    // // removes preloader div
    //   preloader.addEventListener('animationend', () => {
    //     preloader.remove()
    //   })
    // }

    // // calls clear after load even
    // window.addEventListener('load', () => {
    //   clear()
    // })

    // return () => {
    //   window.removeEventListener('load', () => {
    //     clear()
    //   })
    // }
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
