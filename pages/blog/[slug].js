import React from 'react'

import { getPosts, getPostDetails } from '../../services'
import {
  PostDetail,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Breadcrumbs,
  SEO,
} from '../../components'

const PostDetails = ({ post }) => {
  return (
    <>
      <SEO pageName={post.title} description={post.excerpt} />
      <section className='post-details'>
        <div className='post-details__wrapper'>
          <Breadcrumbs />
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>

        <div className='post-details__aside'>
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
        </div>
      </section>
    </>
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
    fallback: false,
  }
}

export default PostDetails
