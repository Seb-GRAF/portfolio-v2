import '../styles/index.scss'
import { Layout } from '../components'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import NextNProgress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }) => {
  // smooth scroll
  useEffect(() => {
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
  }, [])

  return (
    <Layout>
      {/* progress bar on route change */}
      <NextNProgress
        color='#000'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
