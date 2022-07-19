import React from 'react'
import { Header, Preloader } from './'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      {children}
      <footer>&copy; Copyright 2022, Sébastien Graf</footer>
    </>
  )
}

export default Layout
