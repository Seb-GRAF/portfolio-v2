import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimateIn = ({ className, children }) => {
  const divRef = useRef(null)

  useEffect(() => {
    gsap.set(divRef.current, {
      opacity: 0,
      y: 50,
    })

    // animates when entering viewport
    gsap.to(divRef.current, {
      scrollTrigger: {
        trigger: divRef.current,
      },
      duration: 1,
      opacity: 1,
      translateY: 0,
      ease: 'power3.out',
    })
  }, [])

  return (
    <div className={className} ref={divRef}>
      {children}
    </div>
  )
}

export default AnimateIn
