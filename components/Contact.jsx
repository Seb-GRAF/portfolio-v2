import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    const buttonWrapper = document.querySelector(
      '.contact__form__button__wrapper'
    )
    const buttonSpan = document.querySelector('.contact__form__button__text')
    e.preventDefault()
    disableSendButton()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          buttonSpan.textContent = 'Thank you for your message!'
          buttonWrapper.setAttribute(
            'data-link-alt',
            'Thank you for your message!'
          )
        },
        (error) => {
          document.querySelector('.contact__form__button__text').textContent =
            'There was an error sending your message. Please refresh the page and try again.'
          buttonWrapper.setAttribute(
            'data-link-alt',
            'There was an error sending your message. Please refresh the page and try again.'
          )
        }
      )
  }

  const disableSendButton = () => {
    const button = document.querySelector('.contact__form__button')
    const buttonWrapper = document.querySelector(
      '.contact__form__button__wrapper'
    )
    const buttonSpan = document.querySelector('.contact__form__button__text')
    const buttonArrow = document.querySelector('.contact__form__button__arrow')

    button.disabled = true
    button.style.cursor = 'default'
    buttonSpan.textContent = 'Sending...'
    buttonWrapper.setAttribute('data-link-alt', 'Sending...')
    buttonArrow.style.display = 'none'
  }

  return (
    <section className='contact' id='contact'>
      <div className='contact__wrapper'>
        <h1 className='contact__title'>
          <span>03.</span>
          <span>Contact</span>
        </h1>
        <p className='contact__paragraph'>
          I&apos;m currently looking for a role as a front-end web developer.
          Whether you have a question, an offer or just want to chat, send me an
          email or a message and I will get back to you!
        </p>
        <div className='form__wrapper'>
          <div className='form__cta'>
            <div className='form__cta__links'>
              <a
                href='https://github.com/seb-graf'
                target='_blank'
                rel='noopener noreferrer'
                className='form__cta__link'
                aria-label='GitHub'>
                <i
                  className='devicon-github-original'
                  alt=''
                  role='presentation'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/sebastien-graf-a9635922a/'
                target='_blank'
                rel='noopener noreferrer'
                className='form__cta__link'
                aria-label='Linkedin'>
                <i
                  className='devicon-linkedin-plain'
                  alt=''
                  role='presentation'></i>
              </a>
              <a
                href='mailto:seb.graf.sg@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='form__cta__link'
                aria-label='Email'>
                <i
                  className='devicon-google-plain'
                  alt=''
                  role='presentation'></i>
              </a>
            </div>
          </div>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <input
              aria-label='Enter your name'
              className='form__name'
              type='text'
              name='user_name'
              placeholder='your name*'
              required
            />
            <input
              aria-label='Enter your email address'
              className='form__email'
              type='email'
              name='user_email'
              placeholder='your email address*'
              required
            />
            <textarea
              aria-label='Enter your message'
              className='form__message'
              name='message'
              placeholder='your message*'
              required
            />
            <button
              className='form__button'
              type='submit'
              value='Send'
              aria-label='Send your message'>
              <div className='form__button__wrapper' data-link-alt='Send'>
                <span className='contact__form__button__text'>Send</span>
              </div>
              {/* <Image
                className='arrow '
                alt=''
                src='/arrow.svg'
                width='19'
                height='19'
              /> */}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
