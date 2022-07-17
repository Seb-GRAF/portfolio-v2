import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from './AnimateIn'

const Blogs = ({ recentPosts }) => {
  return (
    <section className='blogs'>
      <div className='blogs__wrapper'>
        <h2 className='blogs__title'>
          <span>03.</span>
          <span>Blog</span>
        </h2>

        <p className='blogs__description'>Recent blog posts</p>

        <div className='blogs__posts'>
          {recentPosts.map((post, index) => (
            <section key={post.title} className='blogs__post'>
              <AnimateIn
                className={`blogs__post-image blogs__post-image--${index}`}>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Image
                    src={post.featuredImage.url}
                    alt={post.title}
                    layout='fill'
                    objectFit='cover'
                    onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                      const container = document.querySelector(
                        `.blogs__post-image--${index}`
                      )
                      container.style.aspectRatio = `${naturalWidth}/${naturalHeight}`
                    }}
                  />
                </Link>
              </AnimateIn>

              <AnimateIn className='blogs__post-wrapper'>
                <time dateTime={post.createdAt} className='blogs__post-date'>
                  {moment(post.createdAt).format('DD MMM YYYY')}
                </time>
                <Link href={`/blog/${post.slug}`} key={post.title} passHref>
                  <a>
                    <h3 className='blogs__post-title'>{post.title}</h3>
                  </a>
                </Link>
                <p>{post.excerpt}</p>
              </AnimateIn>
            </section>
          ))}
        </div>

        <div className='blogs__cta'>
          <Link href='/blog' passHref>
            <a className='link__wrapper'>
              <div className='link' data-link-alt='See all blog posts'>
                <span>See all blog posts</span>
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
      </div>
    </section>
  )
}

export default Blogs
