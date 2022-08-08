import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaTiktok, FaPatreon, FaInstagram} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Odd Cat Studio All rights reserverd</p>
      <p className="icons">
        <motion.a href="https://instagram.com/theosunbee?r=nametag" target="_blank" rel="noreferrer"
        whileHover={{scale:1.2}}>
          <FaInstagram />
        </motion.a>
        <motion.a href="https://vm.tiktok.com/ZTdD2Bs6K/" target="_blank" rel="noreferrer"
        whileHover={{scale:1.2}}>
          <FaTiktok />
        </motion.a>
        <motion.a href="https://www.patreon.com/oddcatstudio?fan_landing=true" target="_blank" rel="noreferrer"
        whileHover={{scale:1.2}}>
          <FaPatreon/>
        </motion.a>
      </p>
    </div>
  )
}

export default Footer
