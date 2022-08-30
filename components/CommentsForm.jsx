import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { AnimateIn } from '/'
import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // form refs
  const commentEl = useRef(null)
  const nameEl = useRef(null)
  const emailEl = useRef(null)
  const storeDataEl = useRef(null)

  const handleCommentSubmission = (e) => {
    if (disabled) return
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    // sets error when form not complete
    if (!comment || !name || !email) {
      setError(true)
      return
    }
    setDisabled(true)

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    // stores data to local
    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('storeData', storeData)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('storeData')
    }

    submitComment(commentObj).then((res) => {
      document.querySelector('.comments-form__comment').value = ''
      setShowSuccessMessage(true)

      //removes success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false)
        setDisabled(false)
      }, 5000)
    })
  }

  // sets defaults values from local storage
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name') || ''
    emailEl.current.value = window.localStorage.getItem('email') || ''
    storeDataEl.current.checked = window.localStorage.getItem('storeData') || ''
  }, [])

  return (
    <AnimateIn className='comments-form'>
      <form onSubmit={(e) => e.preventDefault()}>
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
              Save my e-mail and name
            </label>
          </div>
        </div>
        {error && (
          <p className='comments-form__error'>All fields are required</p>
        )}
        <div className='comments-form__button-wrapper'>
          <button
            type='submit'
            onClick={handleCommentSubmission}
            disabled={disabled}
            className='link__wrapper comments-form__button'>
            <div className='link' data-link-alt='Post Comment'>
              <span>Post Comment</span>
            </div>
            <div className='link__arrow'>
              <Image
                src='/arrow.png'
                alt=''
                width='10'
                height='10'
                unoptimized='true'
                layout='responsive'
              />
            </div>
          </button>
          {showSuccessMessage && (
            <span className='comments-form__success'>
              Your comment will be submited shortly
            </span>
          )}
        </div>
      </form>
    </AnimateIn>
  )
}

export default CommentsForm
