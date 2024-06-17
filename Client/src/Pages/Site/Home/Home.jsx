import React from 'react'
import SaleSlider from '../../../Components/Site/SaleSlider/SaleSlider'
import ShippingCards from '../../../Components/Site/ShippingCards/ShippingCards'
import OurProducts from '../../../Components/Site/OurProducts/OurProducts'
import BannerArea from '../../../Components/Site/Banner/Banner'
import NewProducts from '../../../Components/Site/NewProducts/NewProducts'

const Home = () => {
  return (
    <>
      <SaleSlider/>
      <ShippingCards/>
      <OurProducts/>
      <BannerArea/>
      <NewProducts/>
    </>
  )
}

export default Home