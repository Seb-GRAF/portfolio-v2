import React from 'react'
import { useRouter } from 'next/router'

import { getPosts, getPostDetails } from '../../services'
import {
  PostDetail,
  // Categories,
  // PostWidget,
  Loader,
  Author,
  Comments,
  CommentsForm,
  Breadcrumbs,
} from '../../components'

const PostDetails = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

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

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}

export default PostDetails
