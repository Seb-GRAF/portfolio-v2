import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimateIn = ({ className, children }) => {
  const divRef = useRef(null)

  useEffect(() => {
    const ref = divRef.current

    gsap.set(ref, {
      opacity: 0,
      y: 50,
    })

    // animates when entering viewport
    gsap.to(ref, {
      scrollTrigger: {
        trigger: ref,
      },
      duration: 1,
      opacity: 1,
      translateY: 0,
      ease: 'power3.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className={`animate-in ${className}`} ref={divRef}>
      {children}
    </div>
  )
}

export default AnimateIn
