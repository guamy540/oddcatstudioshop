import React from 'react'
import {booya} from '../../assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='header-container'>
        <div>
            <h1>ODD CAT STUDIO SHOP</h1>
        </div>
        <div className='header-image-container'>
            <Image 
            src={booya} 
            alt = "Odd Cat Studio Intro Gif" 
            height={750}
            width={750}  />
        </div>
        <div>
            <h2>Here you can buy many of our fantastic products!</h2>
        </div>
    </div>
  )
}

export default Header
