import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const StyledLink = ({ name, href }) => {
  const router = useRouter()

  return (
    <a className='link__wrapper' href={href} target='__blank'>
      <div className='link' data-link-alt={name}>
        <span aria-hidden='true'>{name}</span>
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
  )
}

export default StyledLink
