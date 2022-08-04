import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const Crumb = ({ crumb, last }) => {
  if (last)
    return (
      <span aria-current='page' className='crumb'>
        {crumb.title !== 'Home' && (
          <span className='crumb__divider'> {'❯'} </span>
        )}
        <span className='crumb__last-text'>{crumb.title}</span>
      </span>
    )

  return (
    <Link href={crumb.href} passHref scroll={false}>
      <a className='crumb'>
        {crumb.title !== 'Home' && (
          <span className='crumb__divider'> {'❯'} </span>
        )}
        <span className='crumb__text'>{crumb.title}</span>
      </a>
    </Link>
  )
}

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const router = useRouter()

  const getBreadcrumbs = () => {
    const pathWithoutQuery = router.asPath.split('?')[0]

    const nestedRoutes = pathWithoutQuery.split('/').filter((v) => v.length > 0)

    const crumbList = nestedRoutes.map((route, index) => {
      const href = '/' + nestedRoutes.slice(0, index + 1).join('/')
      const title = route.replaceAll('-', ' ')

      return { href, title }
    })
    return [{ href: '/', title: 'Home' }, ...crumbList]
  }

  useEffect(() => {
    setBreadcrumbs(getBreadcrumbs())
  }, [])

  return (
    <nav className='breadcrumbs'>
      {breadcrumbs.map((crumb, id) => {
        if (crumb.title === 'category') return
        return (
          <React.Fragment key={`crumbKey-${id}`}>
            <Crumb crumb={crumb} last={id === breadcrumbs.length - 1} />
          </React.Fragment>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
