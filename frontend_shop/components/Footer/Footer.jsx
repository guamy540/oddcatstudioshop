import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaTiktok, FaPatreon, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Odd Cat Studio All rights reserverd</p>
      <p className="icons">
        <a href="https://instagram.com/theosunbee?r=nametag" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://vm.tiktok.com/ZTdD2Bs6K/" target="_blank">
          <FaTiktok />
        </a>
        <a href="https://www.patreon.com/oddcatstudio?fan_landing=true" target="_blank">
          <FaPatreon/>
        </a>
      </p>
    </div>
  )
}

export default Footer
