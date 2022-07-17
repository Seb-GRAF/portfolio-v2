import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { NavLink } from './'

const Header = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNav = () => {
    setNavMenu(!navMenu)
    document
      .querySelector('.nav__sandwich')
      .classList.toggle('nav__sandwich--active')

    document.querySelector('.nav__menu').classList.toggle('nav__menu--active')
  }

  return (
    <>
      <header className='header'>
        <Link href='/' passHref className='link'>
          <a
            aria-label='Home'
            className='logo'
            onClick={(e) => {
              if (navMenu) handleNav()
            }}>
            <svg
              aria-hidden='true'
              focusable='false'
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
          <NavLink name='About' href='/#about' />
          <NavLink name='Projects' href='/#projects' />
          <NavLink name='Contact' href='/#contact' />
          <NavLink name='Blog' href='/blog' />
        </nav>
        <button className='nav__sandwich' onClick={handleNav}>
          <span className='line1'></span>
          <span className='line2'></span>
        </button>
      </header>
      <nav className='nav__menu'>
        <ol className='nav__menu__items'>
          <li className='nav__menu__item'>
            <Link href='/#about' passHref>
              <a className='item__wrapper' onClick={handleNav}>
                <span className='marker'>01.</span>
                <span>About</span>
              </a>
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link href={'/#projects'} passHref>
              <a className='item__wrapper' onClick={handleNav}>
                <span className='marker'>02.</span>
                <span>Projects</span>
              </a>
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link href={'/blog'} passHref>
              <a className='item__wrapper' onClick={handleNav}>
                <span className='marker'>03.</span>
                <span>Blog</span>
              </a>
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link href={'/#contact'} passHref>
              <a className='item__wrapper' onClick={handleNav}>
                <span className='marker'>04.</span>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Header
