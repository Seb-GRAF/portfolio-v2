// import type { AppProps } from 'next/app'

import { useContext } from 'react'
import '../styles/index.scss'
import { Layout, ThemeContext } from '../components'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from '../components'

const MyApp = ({ Component, pageProps }) => {
  const { isDarkTheme } = useContext(ThemeContext)
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
    <ThemeProvider>
      <Layout>
        <NextNProgress
          color='var(--color-text-primary)'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={false}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
