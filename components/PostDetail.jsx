import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import { AnimateIn } from './'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import { default as style } from 'react-syntax-highlighter/dist/cjs/styles/prism/lucario'

const CodeBlock = ({ language, children }) => {
  return (
    <SyntaxHighlighter
      style={style}
      language='tsx'
      PreTag={'div'}
      // CodeTag={'div'}
      showLineNumbers={true}>
      {children}
    </SyntaxHighlighter>
  )
}

const PostDetail = ({ post }) => {
  return (
    <section className='post-detail'>
      <AnimateIn>
        <div className='post-detail__categories'>
          {post.categories.map((category) => (
            <li className='post-detail__category' key={category.slug}>
              {category.name}
            </li>
          ))}
        </div>

        <h1 className='post-detail__title'>{post.title}</h1>

        <div className='post-detail__info'>
          <div className='post-detail__author'>
            <Image
              className='post-detail__author-picture'
              src={post.author.photo.url}
              alt={post.author.name}
              height='30px'
              width='30px'
            />
            <p className='post-detail__author-name'>{post.author.name}</p>
          </div>

          <p className='post-detail__date'>
            {moment(post.createdAt).format('DD MMMM YYYY')}
          </p>
        </div>

        <div className='post-detail__image'>
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </div>
      </AnimateIn>
      <div className='post-detail__wrapper'>
        <ReactMarkdown
          components={{
            code: CodeBlock,
            // pre: ({ children }) => <div className='pre'>{children}</div>,
          }}>
          {post.content.markdown}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default PostDetail
