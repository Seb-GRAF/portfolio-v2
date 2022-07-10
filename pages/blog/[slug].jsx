import React from 'react'

import { getPosts, getPostDetails } from '../../services'
import {
  PostDetail,
  // Categories,
  // PostWidget,
  Author,
  Comments,
  CommentsForm,
  Breadcrumbs,
} from '../../components'

const PostDetails = ({ post }) => {
  return (
    <section className='post-details'>
      <Breadcrumbs />
      <PostDetail post={post} />
      <Author author={post.author} />
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
      {/* <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category: any) => category.slug)}
            />
            <Categories />
          </div>
        </div> */}
    </section>
  )
}

export const getServerSideProps = async ({ params }) => {
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data,
    },
  }
}

export const getServerSidePath = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}

export default PostDetails
