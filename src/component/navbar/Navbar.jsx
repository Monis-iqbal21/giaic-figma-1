import React from 'react'
import "./navbar.css"
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='nav_container'>
            <Link href="#" className='link_li'>  <li className='li'>Works</li></Link>
            <Link href="#" className='link_li'>  <li className='li'>Blog</li></Link>
            <Link href="#" className='link_li'>  <li className='li'>Contact</li></Link>
        </div>
    )
}

export default Navbar