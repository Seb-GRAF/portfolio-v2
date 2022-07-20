import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './'

const ThemeButton = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext)

  useEffect(() => {
    const inputs = document.querySelectorAll('.theme-switch__input')

    inputs.forEach((input) => {
      return isDarkTheme
        ? input.classList.add('theme-switch__input--active')
        : input.classList.remove('theme-switch__input--active')
    })
  }, [isDarkTheme])

  return (
    <label className='theme-switch' aria-label='toggle dark or light mode'>
      <button className='theme-switch__input' onClick={toggleThemeHandler} />
      <span className='theme-switch__slider' />
    </label>
  )
}

export default ThemeButton
