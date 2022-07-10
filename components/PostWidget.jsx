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
    <div className='bg-rose-50 p-8 pb-2 shadow-lg'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-full'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xl'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/${post.slug}`} key={post.title} className='post-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
