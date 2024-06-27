import React from 'react'
import SaleSlider from '../../../Components/Site/Home/SaleSlider/SaleSlider'
import ShippingCards from '../../../Components/Site/Home/ShippingCards/ShippingCards'
import OurProducts from '../../../Components/Site/Home/OurProducts/OurProducts'
import BannerArea from '../../../Components/Site/Home/Banner/Banner'
import NewProducts from '../../../Components/Site/Home/NewProducts/NewProducts'
import ClientSay from '../../../Components/Site/Home/ClientSay/ClientSay'
import BrandAread from '../../../Components/Site/Home/BrandArea/BrandAread'
import BlogArea from '../../../Components/Site/Home/BlogArea/BlogArea'

const Home = () => {
  return (
    <>
      <SaleSlider/>
      <ShippingCards/>
      <OurProducts/>
      <BannerArea/>
      <NewProducts/>
      <ClientSay/>
      <BrandAread/>
      <BlogArea/>
    </>
  )
}

export default Home