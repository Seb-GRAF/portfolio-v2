import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((res) => setComments(res))
  }, [slug])
  return (
    <>
      {comments.length > 0 && (
        <div className='comments'>
          <h2 className='comments__title'>
            {comments.length <= 0
              ? 'No Comments'
              : comments.length === 1
              ? '1 Comment'
              : `${comments.length} Comments`}
          </h2>
          {comments.map((comment) => (
            <div key={comment.createdAt} className='comment'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
