import React from 'react'
import Navbar from "../../src/component/navbar/Navbar.jsx"
import HeroSection from "../../src/component/heroSection/HeroSection.jsx"
import Post from "../../src/component/repost/Repost.jsx"
import FeatureWork from "../../src/component/featureWork/FeatureWork.jsx"
import Footer from "../../src/component/footer/Footer.jsx"


const page = () => {
  return (
    <div className='main_page_container'>
      <Navbar />
      <HeroSection />
      <Post />
      {/*<FeatureWork />
      <Footer /> */}
    </div>
  )
}

export default page