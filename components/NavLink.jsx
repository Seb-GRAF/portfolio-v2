import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ name, href }) => {
  const router = useRouter()

  return (
    <Link href={href} passHref scroll={false}>
      <a
        className={`nav__link link__wrapper ${
          router.pathname === href && 'link__wrapper--active'
        }`}>
        <div className='link' data-link-alt={name}>
          <span aria-hidden='true'>{name}</span>
        </div>
      </a>
    </Link>
  )
}

export default NavLink
