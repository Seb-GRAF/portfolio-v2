import Head from 'next/head'
import { PostCard, Categories, PostWidget, Breadcrumbs } from '../../components'
import { getPosts } from '../../services'

const Home = ({ posts }) => {
  return (
    <section className='blog'>
      <Head>
        <title>SG | Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Breadcrumbs />
      <div className='blog-wrapper'>
        {posts
          .sort((a, b) => (a.node.createdAt > b.node.createdAt ? -1 : 1))
          .map((post, index) => {
            // if (index > 2) return
            return <PostCard post={post.node} key={post.node.title} />
          })}
      </div>
    </section>
  )
}

// fetches posts from services
export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}

export default Home
