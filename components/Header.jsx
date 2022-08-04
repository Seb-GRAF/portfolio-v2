import React, { useState } from 'react'
import Link from 'next/link'
import { NavLink, ThemeButton } from './'
import gsap from 'gsap'

const Header = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNav = () => {
    setNavMenu(!navMenu)
    document
      .querySelector('.nav__sandwich')
      .classList.toggle('nav__sandwich--active')

    gsap.to('.nav__menu', {
      ease: 'power3.inOut',
      duration: 0.5,

      translateY: navMenu ? '-100%' : '0%',
    })
    gsap.to('.nav__overlay', {
      ease: 'power3.inOut',
      duration: 0.5,

      autoAlpha: navMenu ? '0' : '1',
    })
    document.querySelector('.nav__menu').classList.toggle('nav__menu--active')
    document
      .querySelector('.nav__overlay')
      .classList.toggle('nav__overlay--active')
  }

  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <Link href='/' passHref scroll={false} className='link'>
            <a
              aria-label='Home'
              className='logo'
              onClick={(e) => {
                if (navMenu) handleNav()
              }}>
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 147 123'>
                <path
                  id='p1'
                  d='M 147 39 L 147 0 L 0 0 L 0 82 L 105 82 L 105 64 L 107 64 L 107 84 L 0 84 L 0 123 L 147 123 L 147 41 L 41 41 L 41 39 L 147 39 Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </Link>
          <nav className='nav__links'>
            <NavLink name='Home' href='/' />
            <NavLink name='Blog' href='/blog'></NavLink>
            <ThemeButton />
          </nav>
          <button
            className='nav__sandwich'
            aria-label='open navigation menu'
            onClick={handleNav}>
            <span className='line1'></span>
            <span className='line2'></span>
          </button>
        </div>
      </header>
      <nav className='nav__menu'>
        <ThemeButton />
        <ol className='nav__menu__items'>
          <li className='nav__menu__item'>
            <Link href={'/'} passHref scroll={false}>
              <a className='item__wrapper' onClick={handleNav}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link href={'/blog'} passHref scroll={false}>
              <a className='item__wrapper' onClick={handleNav}>
                <span>Blog</span>
              </a>
            </Link>
          </li>
        </ol>
      </nav>
      <div className='nav__overlay' onClick={handleNav} />
    </>
  )
}

export default Header
