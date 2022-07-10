import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // form refs
  const commentEl = useRef(null)
  const nameEl = useRef(null)
  const emailEl = useRef(null)
  const storeDataEl = useRef(null)

  const handleCommentSubmission = (e) => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)

      //removes success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
    })
  }

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name') || ''
    emailEl.current.value = window.localStorage.getItem('email') || ''
  }, [])

  return (
    <div className='comments-form'>
      <h2 className='comments-form__title'>Post a comment</h2>
      <div>
        <textarea
          ref={commentEl}
          placeholder='Comment'
          name='comment'
          className='comments-form__comment'
        />
      </div>

      <div className='comments-form__top'>
        <input
          type='text'
          ref={nameEl}
          className='comments-form__name'
          placeholder='Name'
          name='name'
        />
        <input
          type='mail'
          ref={emailEl}
          className='comments-form__email'
          placeholder='Email'
          name='email'
        />
      </div>

      <div className='comments-form__save-info'>
        <div>
          <input
            ref={storeDataEl}
            type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
            className='comments-form__checkbox ml-1'
          />
          <label htmlFor='storeData' className='comments-form__checkbox-text'>
            Save my e-mail and name for the next time
          </label>
        </div>
      </div>
      {error && <p className='comments-form__error'>All fields are required</p>}
      <div className='comments-form__button-wrapper'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='comments-form__button'>
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className='comments-form__success'>
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
