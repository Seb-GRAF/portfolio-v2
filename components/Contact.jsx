import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
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
              <Link
                href='https://github.com/seb-graf'
                passHref
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                <a className='form__cta__link'>
                  <i
                    className='devicon-github-original'
                    alt=''
                    role='presentation'></i>
                </a>
              </Link>
              <Link
                href='https://www.linkedin.com/in/sebastien-graf-a9635922a/'
                passHref
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'>
                <a className='form__cta__link'>
                  <i
                    className='devicon-linkedin-plain'
                    alt=''
                    role='presentation'></i>
                </a>
              </Link>
              <Link
                href='mailto:seb.graf.sg@gmail.com'
                passHref
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Email'>
                <a className='form__cta__link'>
                  <i
                    className='devicon-google-plain'
                    alt=''
                    role='presentation'></i>
                </a>
              </Link>
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
              className='link__wrapper'
              type='submit'
              value='Send'
              aria-label='Send your message'>
              <div className='link' data-link-alt='Send'>
                <span className='contact__form__button__text'>Send</span>
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
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
