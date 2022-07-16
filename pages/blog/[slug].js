import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getPosts, getPostDetails } from '../../services'
import {
  PostDetail,
  PostWidget,
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
    <>
      <Head>
        <title>SG | {post.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='post-details'>
        <div className='post-details__wrapper'>
          <Breadcrumbs />
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        {/* <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
          <Categories />
          </div>
        </div> */}
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
    fallback: true,
  }
}

export default PostDetails
