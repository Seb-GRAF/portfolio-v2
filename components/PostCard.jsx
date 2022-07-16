import React, { useRef } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn } from './'

const PostCard = ({ post }) => {
  const postCardRef = useRef(null)

  return (
    <div className='postcard' ref={postCardRef}>
      <AnimateIn>
        <Link href={`/blog/${post.slug}`} passHref>
          <div className='postcard__image'>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout='fill'
              objectFit='contain'
              onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                const container =
                  postCardRef.current.querySelector('.postcard__image')
                container.style.aspectRatio = `${naturalWidth}/${naturalHeight}`
              }}
            />
          </div>
        </Link>
      </AnimateIn>
      <AnimateIn>
        <div className='postcard__categories'>
          {post.categories.map((category) => (
            <li className='postcard__category' key={category.slug}>
              {/* <Link href={`/blog/category/${category.slug}`}> */}
              {category.name}
              {/* </Link> */}
            </li>
          ))}
        </div>

        <h1 className='postcard__title'>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h1>

        <p className='postcard__description'>{post.excerpt}</p>

        <div className='postcard__info'>
          <div className='postcard__author'>
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              height='30px'
              width='30px'
              className='postcard__author-picture'
            />
            <p className='postcard__author-name'>{post.author.name}</p>
          </div>
          <p className='postcard__date'>
            {moment(post.createdAt).format('DD MMM YYYY')}
          </p>
        </div>
      </AnimateIn>
    </div>
  )
}

export default PostCard
