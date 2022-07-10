import React from 'react'
import { Header, Preloader } from './'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      {children}
    </>
  )
}

export default Layout
