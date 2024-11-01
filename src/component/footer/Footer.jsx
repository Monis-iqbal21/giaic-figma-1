import React from 'react'
import "./footer.css"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='footer_div'>
      <div className="icon_div">
        <Image src={require("../../../images/fb_logo.png")} className="icons" alt='fb'/>
        <Image src={require("../../../images/insta_logo.png")} className="icons" alt='insta'/>
        <Image src={require("../../../images/twitter_logo.png")} className="icons" alt='twitter'/>
        <Image src={require("../../../images/Linkedin_logo.png")} className="icons" alt='linkedin'/>


      </div>

      <div className='copyright'>
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer