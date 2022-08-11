import React from 'react'
import {booya} from '../../assets'
import Image from 'next/image'
import {motion} from 'framer-motion'


const Header = () => {
  return (
    <div className='header-container'>
        <motion.div
        initial={{x:-1000}}
        animate={{x: 0}}
        transition={{duration:.5}}>
            <h1 className='header-h1'>ODD CAT STUDIO SHOP</h1>
        </motion.div>
        <motion.div className='header-image-container'
           initial={{y:-1000}}
           animate={{y: 0}}
           transition={{delay: .5, duration:.5}}
           >
          <Image 
            src={booya} 
            alt = "Odd Cat Studio Intro Gif" 
            height={750}
            width={750}  />
        </motion.div>
        <motion.div className='shop-now-message-container'
        >
            <h2>Here you can buy many of our fantastic products!</h2>
        </motion.div>
    </div>
  )
}

export default Header
