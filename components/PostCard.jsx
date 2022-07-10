import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className='col-span-3 sm:col-span-2 lg:col-span-1 sm:first-of-type:col-span-4 lg:first-of-type:col-span-2'>
      <div className='relative overflow-hidden pb-80 mb-4 bg-gray-200 cursor-pointer'>
        <Link href={`/blog/${post.slug}`}>
          <div>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              loading='lazy'
              priority={false}
            />
          </div>
        </Link>
      </div>

      <div className='flex flex-wrap list-none gap-4 mb-4'>
        {post.categories.map((category) => (
          <li
            className='bg-rose-100 text-rose-800 px-2 py-1'
            key={category.slug}>
            <Link href={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </div>

      <h1 className='transition duration-300 mb-4 cursor-pointer hover:text-rose-800 text-3xl font-semibold'>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h1>

      <p className='text-lg text-gray-700 font-normal mb-4'>{post.excerpt}</p>

      <div className='flex items-center mb-8 w-full'>
        <div className='flex items-center w-auto mr-8'>
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full'
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700 whitespace-nowrap'>
          <span>{moment(post.createdAt).format('DD MMM YYYY')}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
