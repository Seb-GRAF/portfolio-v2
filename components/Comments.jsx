import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { AnimateIn } from './'
import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((res) => setComments(res))
  }, [slug])
  return (
    <>
      {comments.length > 0 && (
        <AnimateIn className='comments'>
          <h2 className='comments__title'>
            {comments.length <= 0
              ? 'No comments yet'
              : comments.length === 1
              ? '1 comment'
              : `${comments.length} comments`}
          </h2>
          {comments.map((comment) => (
            <div key={comment.createdAt} className='comment'>
              <p className='comment__name'>
                <span className='comment__author'>{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD YYYY')} :
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </AnimateIn>
      )}
    </>
  )
}

export default Comments
