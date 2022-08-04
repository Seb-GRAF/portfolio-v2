import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem('isDarkTheme')
  }

  const setValueToLocal = (value) => {
    localStorage.setItem('isDarkTheme', `${value}`)
  }

  const toggleThemeHandler = () => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkTheme'))

    setIsDarkTheme(() => !currentTheme)
    document.querySelector('html').classList.toggle('dark')
    setValueToLocal(!currentTheme)
  }

  // toggles theme based on system theme
  const systemThemeToggle = () => {
    // true if dark theme
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (systemTheme) document.querySelector('html').classList.add('dark')
    if (!systemTheme) document.querySelector('html').classList.remove('dark')

    setIsDarkTheme(systemTheme)
    setValueToLocal(systemTheme)
  }

  useEffect(() => {
    // sets to local storage theme
    // if (!isLocalStorageEmpty()) {
    //   const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'))
    //   isDarkTheme && document.querySelector('html').classList.add('dark')
    //   setIsDarkTheme(() => isDarkTheme)
    // }
    if (isLocalStorageEmpty()) systemThemeToggle()
    else {
      const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'))
      isDarkTheme && document.querySelector('html').classList.add('dark')
      setIsDarkTheme(() => isDarkTheme)
    }

    // timeout to prevent flash of white on page load
    setTimeout(() => {
      document.querySelector('body').classList.remove('loading')
    }, 400)

    // watches for system theme change
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', systemThemeToggle)

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', systemThemeToggle)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}
