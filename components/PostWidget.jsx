import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug, categories])

  return (
    <div className='post-widget'>
      <h3 className='post-widget__title text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
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
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </time>
            <p className='post-widget__post-title'>
              <Link href={`/${post.slug}`} key={post.title} className='post-md'>
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
