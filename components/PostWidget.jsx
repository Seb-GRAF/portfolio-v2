import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setPosts(result))
    } else {
      getRecentPosts().then((result) => setPosts(result))
    }
  }, [slug, categories])

  return (
    <div className='post-widget'>
      <h3 className='post-widget__title'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {posts.map((post) => (
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
            <time dateTime={post.createdAt} className='post-widget__post-date'>
              {moment(post.createdAt).format('DD MMM YYYY')}
            </time>
            <p className='post-widget__post-title'>
              <Link href={`/blog/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
