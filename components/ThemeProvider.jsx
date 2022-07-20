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

  const toggleThemeHandler = () => {
    const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'))

    setIsDarkTheme(() => !isDarkTheme)
    toggleDarkClass()
    setValueToLocal()
  }

  const toggleDarkClass = () => {
    document.querySelector('html').classList.toggle('dark')
  }

  const setValueToLocal = () => {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }

  useEffect(() => {
    const initialThemeHandler = () => {
      if (isLocalStorageEmpty()) {
        localStorage.setItem('isDarkTheme', 'true')
        document.querySelector('html').classList.add('dark')
        setIsDarkTheme(true)
      } else {
        const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'))

        isDarkTheme && document.querySelector('html').classList.add('dark')

        setIsDarkTheme(() => isDarkTheme)
      }
    }
    initialThemeHandler()
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}
