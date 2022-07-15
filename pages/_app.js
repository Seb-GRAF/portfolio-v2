import '../styles/index.scss'
import { Layout } from '../components'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'

const MyApp = ({ Component, pageProps }) => {
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

    // removes preloader after first load
    const removePreloader = () => {
      gsap.to('.preloader', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.querySelector('.preloader').remove()
        },
      })
    }

    window.addEventListener('load', removePreloader)
    return () => {
      window.removeEventListener('load', removePreloader)
    }
  }, [])

  return (
    <>
      <div className='preloader'></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
