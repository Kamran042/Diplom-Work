import React from 'react'
import "./About.scss"
import AboutTop from '../../../Components/Site/About/AboutTop/AboutTop'
import OurStroy from '../../../Components/Site/About/OurStory/OurStroy'
import ShippingCards from '../../../Components/Site/About/ShippingCards/ShippingCards'
import VideoContainer from '../../../Components/Site/About/VideoContainer/VideoContainer'
import OurTeam from '../../../Components/Site/About/OurTeam/OurTeam'
import BrandAread from '../../../Components/Site/Home/BrandArea/BrandAread'

const About = () => {
  return (
    <>
      <AboutTop/>
      <OurStroy/>
      <ShippingCards/>
      <VideoContainer/>
      <OurTeam/>
      <BrandAread/>
    </>
  )
}

export default About