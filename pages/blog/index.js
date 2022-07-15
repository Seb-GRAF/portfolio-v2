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
        {posts.map((post) => (
          <PostCard post={post.node} key={post.node.title} />
        ))}

        {/* <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div> */}
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
