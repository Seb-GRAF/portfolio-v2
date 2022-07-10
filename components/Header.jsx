import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])

  const [navMenu, setNavMenu] = useState(false)

  const handleNav = () => {
    setNavMenu(!navMenu)
    document
      .querySelector('.nav__sandwich')
      .classList.toggle('nav__sandwich--active')
    document.querySelector('.nav__menu').classList.toggle('nav__menu--active')
  }

  const scrollTo = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <Link
            href='/#hero'
            className='link'
            // onClick={(e) => {
            //   e.preventDefault()
            //   scrollTo('#hero')
            //   if (navMenu) handleNav()
            // }}
          >
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
          </Link>
        </div>
        <div className='nav__links' link>
          <Link
            href='/#about'
            className='nav__link link'
            data-link-alt='About'
            // onClick={(e) => {
            //   e.preventDefault()
            //   scrollTo('#about')
            // }}
          >
            <span>About</span>
          </Link>
          <Link
            href='/#projects'
            className='nav__link link'
            data-link-alt='Projects'
            // onClick={(e) => {
            //   e.preventDefault()
            //   scrollTo('#projects')
            // }}
          >
            <span>Projects</span>
          </Link>
          <Link
            className='nav__link link'
            href='/#contact'
            data-link-alt='Contact'
            // onClick={(e) => {
            //   e.preventDefault()
            //   scrollTo('#contact')
            // }}
          >
            <span>Contact</span>
          </Link>
          <Link
            className='nav__link link'
            href='/blog'
            data-link-alt='Blog'
            // onClick={(e) => {
            //   e.preventDefault()
            //   scrollTo('#contact')
            // }}
          >
            <span>Blog</span>
          </Link>
        </div>
        <div className='nav__sandwich' onClick={handleNav}>
          <span className='line1'></span>
          <span className='line2'></span>
        </div>
      </header>
      <nav className='nav__menu'>
        <ol className='nav__menu__items'>
          <li>
            <div
              className='nav__menu__item'
              onClick={() => {
                handleNav()
                scrollTo('#about')
              }}>
              <div className='item__wrapper'>
                <span className='marker'>01.</span>
                <span>About</span>
              </div>
            </div>
          </li>
          <li>
            <div
              className='nav__menu__item'
              onClick={() => {
                handleNav()
                scrollTo('#projects')
              }}>
              <div className='item__wrapper'>
                <span className='marker'>02.</span>
                <span>Projects</span>
              </div>
            </div>
          </li>
          <li>
            <div
              className='nav__menu__item'
              onClick={() => {
                handleNav()
                scrollTo('#contact')
              }}>
              <div className='item__wrapper'>
                <span className='marker'>03.</span>
                <span>Contact</span>
              </div>
            </div>
          </li>
        </ol>
      </nav>
    </>
  )

  // return (
  //   <div className='container mx-auto px-5 sm:px-10 mb-8'>
  //     <div className='border-b w-full inline-block border-zinc-700 py-4 lg:py-8'>
  //       <div className='md:float-left flex '>
  //         <span className='cursor-pointer font-bold text-4xl'>
  //           <Link href='/'>SG</Link>
  //         </span>
  //         <span className='text-rose-800 font-semibold'> Blog</span>
  //       </div>
  //       <ul className='hidden md:contents'>
  //         {categories.map((category) => (
  //           <li key={category.slug}>
  //             <span className='md:float-right mt-2 align-middle ml-4 py-1 px-3 font-semibold cursor-pointer bg-gradient-to-r from-rose-200 to-rose-200 bg-no-repeat [background-position:0_100%]    [background-size:100%_0em] motion-safe:transition-all motion-safe:duration-200 hover:[background-size:100%_100%]      focus:[background-size:100%_100%] hover:text-rose-800'>
  //               <Link href={`/category/${category.slug}`}>{category.name}</Link>
  //             </span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // )
}

export default Header
