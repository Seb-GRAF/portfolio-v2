import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const Crumb = ({ crumb, last }) => {
  if (last)
    return (
      <>
        {crumb.title !== 'Home' && (
          <span className='crumb__divider'> {'❯'} </span>
        )}
        <p className='crumb__last-text'>{crumb.title}</p>
      </>
    )

  return (
    <>
      {crumb.title !== 'Home' && (
        <span className='crumb__divider'> {'❯'} </span>
      )}
      <p className='crumb__text'>
        <Link href={crumb.href}>{crumb.title}</Link>
      </p>
    </>
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
    <ul className='breadcrumbs'>
      {breadcrumbs.map((crumb, id) => {
        if (crumb.title === 'category') return
        return (
          <li key={`crumbKey-${id}`} className='crumb'>
            <Crumb crumb={crumb} last={id === breadcrumbs.length - 1} />
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
