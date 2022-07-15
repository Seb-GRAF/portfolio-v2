import React from 'react'
import Image from 'next/image'
import { AnimateIn } from './'

const Author = ({ author }) => {
  return (
    <AnimateIn className='author'>
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
      <div className='author__info'>
        <p className='author__title'>Author</p>
        <h3 className='author__name'>{author.name}</h3>
        <p className='author__bio'>{author.bio}</p>
      </div>
    </AnimateIn>
  )
}

export default Author
