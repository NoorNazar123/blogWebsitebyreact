import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <div className=' overflow-hidden'>
      <Header />
       <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
