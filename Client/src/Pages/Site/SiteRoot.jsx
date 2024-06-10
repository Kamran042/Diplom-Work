import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../Layout/Site/Header/Header'
import Footer from '../../Layout/Site/Footer/Footer'

const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot