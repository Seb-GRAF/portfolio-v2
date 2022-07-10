¯
import React from 'react'

import { getCategories, getCategoryPosts } from '../../../services'
import { PostCard, PostWidget, Categories, Breadcrumbs } from '../../../components'

const CategoryPosts = ({
  posts,
}) => {
  return (
    <div className='container mx-auto px-5 sm:px-10 mb-8'>
      <Breadcrumbs />

      <div className='grid grid-cols-3 gap-12'>
        {posts.map((post: { node: {} }, index: number) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
      {/* <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div> */}
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const posts = await getCategoryPosts(params!.slug)

  return {
    props: {
      posts,
    },
  }
}

export const getStaticPaths = async () => {
  const categories: [] = await getCategories()

  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

export default CategoryPosts
