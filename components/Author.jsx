import React from 'react'
import Image from 'next/image'
import { AnimateIn } from './'

const Author = ({ author }) => {
  return (
    <AnimateIn className='author'>
      <div className='author__info'>
        <div className='author__description'>
          <div className='author__image-wrapper'>
            <Image
              unoptimized={true}
              src={author.photo.url}
              alt={author.name}
              height='100px'
              width='100px'
              className='author__image'
            />
          </div>
          <div>
            <span className='author__title'>Author</span>
            <p className='author__name'>{author.name}</p>
          </div>
        </div>
        <p className='author__bio'>{author.bio}</p>
      </div>
    </AnimateIn>
  )
}

export default Author
