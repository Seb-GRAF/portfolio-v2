import { useContext } from 'react'
import '../styles/index.scss'
import { Layout, ThemeContext } from '../components'
// import { useEffect } from 'react'
// import Lenis from '@studio-freight/lenis'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from '../components'

const MyApp = ({ Component, pageProps }) => {
  const { isDarkTheme } = useContext(ThemeContext)
  // // smooth scroll
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 0,

  //     direction: 'vertical',
  //     smooth: true,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //   })

  //   //get scroll value
  //   lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  //     console.log({ scroll, limit, velocity, direction, progress })
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  return (
    <ThemeProvider>
      <Layout>
        <NextNProgress
          color='var(--color-text-primary)'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={false}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
