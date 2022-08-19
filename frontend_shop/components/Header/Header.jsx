import React from 'react'
import {booya, buttons, prints, stickers} from '../../assets'
import Image from 'next/image'
import {motion} from 'framer-motion'


const Header = () => {
  return (
    <div className='header-container'>
        <motion.div
        initial={{x:-1000}}
        animate={{x: 0}}
        transition={{duration:.5}}
        className='header-title-container'
        >
            <h1 className='header-h1' >Check out our stuff!</h1>
            <a href={'#prints'}><motion.button 
            whileHover={{scale: 1.3, }}
            className='header-cta-button'>
              Shop Now!</motion.button></a>
        </motion.div>
        <motion.div 
        initial={{x:-1000}}
        animate={{x: 0}}
        transition={{duration:.5}}
        className='header-cta-container'>
          <a href={`#prints`}>
          <motion.div whileHover={{scale: 1.3, }} className='header-img-container'>
            <Image src={prints} 
            alt = "Odd Cat Studio Intro Gif" 
            height={250}
            width={250}
            className='header-img'></Image>
            <p className='header-cta-p'>Prints</p>
          </motion.div></a>

          <a href={'#stickers'}>
          <motion.div whileHover={{scale: 1.3, }}  className='header-img-container'>
          <Image src={stickers} 
          className='header-img'
            alt = "Odd Cat Studio Intro Gif" 
            height={250}
            width={250}></Image>
            <p>Stickers</p></motion.div></a>
          
          <a href={'#buttons'}>
          <motion.div whileHover={{scale: 1.3, }}  className='header-img-container'>        
          <Image src={buttons} 
          className='header-img'
            alt = "Odd Cat Studio Intro Gif" 
            height={250}
            width={250}></Image>
            <p>Buttons</p></motion.div></a>

          <a href={'#singletons'}>
          <motion.div whileHover={{scale: 1.3, }}  className='header-img-container'>
          <Image src={booya} 
          className='header-img'
            alt = "Odd Cat Studio Intro Gif" 
            height={250}
            width={250}></Image>
            <p>One of a kinds!</p></motion.div></a>      
        </motion.div>

       {/* <motion.div className='header-image-container'
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
        </motion.div>*/}
    </div>
  )
}

export default Header
