import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ name, href, children }) => {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <a
        className={`link__wrapper ${
          router.asPath.includes(href) && 'link__wrapper--active'
        }`}>
        <div className='link' data-link-alt={name}>
          <span>{name}</span>
        </div>
        {!router.asPath.includes('/blog') && (
          <React.Fragment>{children}</React.Fragment>
        )}
      </a>
    </Link>
  )
}

export default NavLink
