import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts } from '../services'

const PostWidget = ({ similarPosts }) => {
  const [posts, setPosts] = useState([])
  const router = useRouter()

  // if no similar posts, sets posts to recent posts
  useEffect(() => {
    if (similarPosts.length > 0) {
      setPosts(similarPosts)
    }
    if (similarPosts.length === 0) {
      getRecentPosts().then((data) => {
        setPosts(data)
      })
    }
  }, [similarPosts])

  return (
    <div className='post-widget'>
      <h3 className='post-widget__title'>
        {similarPosts.length > 0 ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {posts &&
        posts.map((post) => {
          return (
            post.slug !== router.query.slug && (
              <div key={post.title} className='post-widget__post'>
                <div className='post-widget__post-image'>
                  <Image
                    src={post.featuredImage.url}
                    alt={post.title}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='post-widget__post-wrapper'>
                  <time
                    dateTime={post.createdAt}
                    className='post-widget__post-date'>
                    {moment(post.createdAt).format('DD MMMM YYYY')}
                  </time>
                  <p className='post-widget__post-title'>
                    <Link
                      href={`/blog/${post.slug}`}
                      key={post.title}
                      passHref
                      scroll={false}>
                      <a>{post.title}</a>
                    </Link>
                  </p>
                </div>
              </div>
            )
          )
        })}
    </div>
  )
}

export default PostWidget
