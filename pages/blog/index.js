import { useEffect } from 'react'
import { PostCard, SEO, Breadcrumbs } from '../../components'
import { getPosts } from '../../services'

const Home = ({ posts }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='blog'>
      <SEO pageName='Blog' />

      <Breadcrumbs />
      <div className='blog-wrapper'>
        {posts
          .sort((a, b) => (a.node.createdAt > b.node.createdAt ? -1 : 1))
          .map((post, index) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
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
