import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn, SEO } from '../components'

const ErrorPage = () => {
  return (
    <>
      <SEO pageName='404' />
      <AnimateIn className='error-page'>
        <h1 className='error-page__title'>
          Oops, this page doesn&apos;t exist {':('}
        </h1>

        <div className='error-page__links'>
          <Link href='/'>
            <a className='link__wrapper'>
              <div className='link' data-link-alt='Take me home'>
                <span>Take me home</span>
              </div>
              <div className='link__arrow'>
                <Image
                  src='/arrow.png'
                  alt=''
                  width='10'
                  height='10'
                  unoptimized='true'
                  layout='responsive'
                />
              </div>
            </a>
          </Link>
        </div>
      </AnimateIn>
    </>
  )
}

export default ErrorPage
