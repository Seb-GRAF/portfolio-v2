import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostDetail = ({ post }) => {
  // type formatting for the post content
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-two':
        return (
          <h2 key={index} className='post-h2'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className='post-h3'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className='post-p'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className='post-image'
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <section className='post-detail'>
      <div className='post-detail__categories'>
        {post.categories.map((category) => (
          <li className='post-detail__category' key={category.slug}>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </div>
      <div className='post-detail__wrapper'>
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
            Created on {moment(post.createdAt).format('MMMM Do, YYYY')}
          </p>
        </div>

        <div className='post-detail__image'>
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
          />
        </div>

        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </section>
  )
}

export default PostDetail
