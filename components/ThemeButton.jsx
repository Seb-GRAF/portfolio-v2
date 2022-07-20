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
    <label className='theme-button' aria-label='toggle dark or light mode'>
      <button className='theme-button__input' onClick={toggleThemeHandler} />
      <span className='theme-button__slider' />
    </label>
  )
}

export default ThemeButton
