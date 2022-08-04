import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './'

const ThemeButton = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext)

  useEffect(() => {
    const inputs = document.querySelectorAll('.theme-button__input')

    inputs.forEach((input) => {
      return isDarkTheme
        ? input.classList.add('theme-button__input--active')
        : input.classList.remove('theme-button__input--active')
    })
  }, [isDarkTheme])

  return (
    <button className='theme-button__wrapper' onClick={toggleThemeHandler}>
      {/* <span className='theme-button__label' aria-hidden='true'>
        light
      </span> */}
      <div className='theme-button'>
        <div className='theme-button__input' />
        <span className='theme-button__slider' />
      </div>
      {/* <span className='theme-button__label' aria-hidden='true'>
        dark
      </span> */}
    </button>
  )
}

export default ThemeButton
