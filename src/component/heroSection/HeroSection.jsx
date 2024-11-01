import React from 'react'
import "./heroSection.css"
import '../../app/globals.css';
import Image from 'next/image'



const HeroSection = () => {
    return (
        <div className="hero_section_container">
            <div className='hero_section_grid'>
                <div className='hero_detail_section'>
                    <h1 className='hero_h1'>Hi, I am John,<br />Creative Technologist</h1>

                    <p className='hero_summary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.</p>


                    <button className='download_btn'>Download Resume</button>


                </div>




                <div className='hero_pic_section'>
                    <div className="hero_image_div">
                        <Image src={require("../../../images/blackimage.png")} className='hero_image' alt="Men in suit" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HeroSection