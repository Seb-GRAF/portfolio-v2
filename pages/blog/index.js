import { useEffect, useState, useRef } from 'react'
import { PostCard, SEO, Breadcrumbs } from '../../components'
import { getPosts, getCategories } from '../../services'
import useWindowSize from '../../hooks/useWindowSize'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AnimateCategories = ({ children, animate = true }) => {
  const divRef = useRef(null)

  useEffect(() => {
    if (animate) {
      gsap.set(divRef.current, {
        opacity: 0,
        y: -20,
      })
    }

    // animates when entering viewport
    gsap.to(divRef.current, {
      scrollTrigger: {
        trigger: divRef.current,
      },
      duration: 0.5,
      opacity: 1,
      translateY: 0,
      ease: 'power3.out',
    })
  }, [animate])

  return (
    <ul
      className={`blog__categories`}
      aria-label='filter by category'
      ref={divRef}>
      {children}
    </ul>
  )
}

const Blog = ({ posts, categories }) => {
  const size = useWindowSize()

  const [currentCategory, setCurrentCategory] = useState('all')
  const [isMobile, setIsMobile] = useState(size.width < 768)
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    const onClick = (e) => {
      if (size.width > 768) return

      if (e.target.className === 'blog__categories') return
      if (e.target.className === 'blog__filter-button') {
        setShowCategories((prev) => !prev)
      } else {
        setShowCategories(false)
      }
    }

    setIsMobile(size.width < 768)
    setShowCategories(size.width > 768)

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [size])

  return (
    <section className='blog'>
      <SEO pageName='Blog' />

      <Breadcrumbs />
      <h1 className='blog__title'>Blog</h1>
      {isMobile && <button className='blog__filter-button'>Categories</button>}
      {showCategories && (
        <AnimateCategories animate={isMobile}>
          <li
            className={`blog__category ${
              currentCategory === 'all' ? 'blog__category--active' : ''
            }`}>
            <button
              aria-label='show all posts'
              className='blog__category-button'
              onClick={() => setCurrentCategory('all')}>
              All
            </button>
          </li>
          {categories.map((category) => (
            <li
              className={`blog__category ${
                category.slug === currentCategory
                  ? 'blog__category--active'
                  : ''
              }`}
              key={category.slug}
              onClick={() => setCurrentCategory(category.slug)}>
              <button
                aria-label={`show all posts in ${category.name}`}
                className='blog__category-button'
                onClick={() => setCurrentCategory('all')}>
                {category.name}
              </button>
            </li>
          ))}
        </AnimateCategories>
      )}
      <div className='blog-wrapper'>
        {posts
          .filter((post) => {
            if (currentCategory === 'all') return true

            let isInCategory = false
            post.node.categories.forEach((category) => {
              if (category.slug === currentCategory) isInCategory = true
            })

            return isInCategory
          })
          .sort((a, b) => (a.node.createdAt > b.node.createdAt ? -1 : 1))
          .map((post, index) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
      </div>
    </section>
  )
}

// fetches posts from services
export const getStaticProps = async () => {
  const posts = await getPosts()
  const categories = await getCategories()

  return {
    props: {
      posts,
      categories,
    },
  }
}

export default Blog
