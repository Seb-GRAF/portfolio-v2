import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import { AnimateIn } from './'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { default as style } from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

const CodeBlock = ({ children }) => {
  return (
    <SyntaxHighlighter
      style={style}
      language='tsx'
      showLineNumbers={false}
      wrapLines={true}>
      {children}
    </SyntaxHighlighter>
  )
}

const PostDetail = ({ post }) => {
  return (
    <section className='post-detail'>
      <div>
        <AnimateIn className='post-detail__categories'>
          {post.categories.map((category) => (
            <li className='post-detail__category' key={category.slug}>
              {category.name}
            </li>
          ))}
        </AnimateIn>
        <AnimateIn>
          <h1 className='post-detail__title'>{post.title}</h1>
        </AnimateIn>

        <AnimateIn className='post-detail__info'>
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
        </AnimateIn>

        <AnimateIn className='post-detail__image'>
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </AnimateIn>
      </div>
      <div className='post-detail__wrapper'>
        <ReactMarkdown
          components={{
            code: CodeBlock,
          }}>
          {post.content.markdown}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default PostDetail
