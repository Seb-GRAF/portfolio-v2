import Head from 'next/head'
import { PostCard, Categories, PostWidget, Breadcrumbs } from '../../components'
import { getPosts } from '../../services'

const Home = ({ posts }) => {
  return (
    <div className='container mx-auto px-5 lg:px-10 mb-8'>
      <Head>
        <title>SG Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Breadcrumbs />
      <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-12'>
        {posts.map((post, index) => (
          <PostCard post={post.node} key={post.node.title} />
        ))}

        {/* <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div> */}
      </div>
    </div>
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
