import React from 'react'

import { getPosts, getPostDetails, getSimilarPosts } from '../../services'
import {
  PostDetail,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Breadcrumbs,
  SEO,
} from '../../components'

const PostDetails = ({ post, similarPosts }) => {
  return (
    <>
      <SEO
        pageName={post.title}
        description={post.excerpt}
        canonical={`https://seb-graf.com/${post.slug}`}
      />
      <section className='post-details'>
        <div className='post-details__wrapper'>
          <Breadcrumbs />
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>

        <div className='post-details__aside'>
          <PostWidget similarPosts={similarPosts} />
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getPostDetails(params.slug)
  const similarCategories = post.categories.map((category) => category.slug)
  const similarPosts = await getSimilarPosts(similarCategories, post.slug)

  return {
    props: {
      post,
      similarPosts,
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
