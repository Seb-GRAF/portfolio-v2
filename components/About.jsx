import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
// import Draggable from 'gsap/dist/Draggable'

const Skill = ({ name, icon }) => {
  return (
    <div className='skill'>
      <i className={`${icon} colored`}></i>
      <p>{name}</p>
    </div>
  )
}

const About = () => {
  // gsap.registerPlugin(Draggable)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  // draggable section
  // useEffect(() => {
  //   let wrapper = document.querySelector('.skills__wrapper')
  //   let boxes = document.querySelectorAll('.skill')

  //   let boxWidth =
  //     window.innerWidth > 1800
  //       ? 250
  //       : window.innerWidth > 1500
  //       ? 200
  //       : window.innerWidth > 1000
  //       ? 165
  //       : 125
  //   let wrapWidth = boxes.length * boxWidth

  //   for (let i = 0; i < boxes.length; i++) {
  //     let box = boxes[i]
  //     gsap.set(box, { x: i * boxWidth, left: -boxWidth })
  //   }

  //   let wrapProgress = gsap.utils.wrap(0, 1)

  //   let proxy = document.createElement('div')
  //   let props = gsap.getProperty(proxy)

  //   let animation = gsap.to(boxes, {
  //     x: '+=' + wrapWidth,
  //     ease: 'linear',
  //     paused: true,
  //     modifiers: {
  //       x: function (x) {
  //         x = parseFloat(x) % wrapWidth
  //         return x + 'px'
  //       },
  //     },
  //   })

  //   const drag = Draggable.create(proxy, {
  //     trigger: wrapper,
  //     onDrag: updateProgress,
  //   })

  //   function updateProgress() {
  //     animation.progress(wrapProgress(props('x') / wrapWidth))
  //   }

  //   return () => {
  //     drag[0].kill()
  //   }
  // }, [windowWidth])

  return (
    <section className='about' id='about'>
      <div className='about__wrapper'>
        <h2 className='about__title'>
          <span>01.</span>
          <span>About</span>
        </h2>
        <div className='about__text'>
          <p>
            <i>
              Growing up, I always had an affinity for tech and computers.
              Jailbreaking my first iPod, installing custom ROMs on my android
              phones or learning to use Adobe Photoshop and AfterEffect at a
              young age were some of the things that made me proficient with
              technologies.
            </i>
          </p>
          <p>
            Today I'm enthralled by <b>web development</b>, creating new
            products, experiences and designs, always keeping an eye out for
            details to enhance the user experience better.
          </p>
          <p>
            I work with <b>React</b>, <b>Next.JS</b>, <b>JavaScript (ES6+)</b>,{' '}
            <b>CSS</b> and <b>HTML</b> to deliver quality front-end products. I
            also acquired some base knowledge of <b>NodeJS</b> and{' '}
            <b>EXPRESS</b> to better understand backend.
          </p>
        </div>
        <div className='skills__wrapper'>
          <div className='skills'>
            <Skill name='git' icon='devicon-git-plain' />
            <Skill name='webpack' icon='devicon-webpack-plain' />
            <Skill name='html5' icon='devicon-html5-plain' />
            <Skill name='css3' icon='devicon-css3-plain' />
            <Skill name='react' icon='devicon-react-original' />
            <Skill name='javascript' icon='devicon-javascript-plain' />
            <Skill name='sass' icon='devicon-sass-original' />
            <Skill name='jest' icon='devicon-jest-plain' />
            <Skill name='npm' icon='devicon-npm-original-wordmark' />
            <Skill name='mongodb' icon='devicon-mongodb-plain' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
