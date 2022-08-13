import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image'
import { logo } from '../../assets';
import  Cart  from '../Cart/Cart';
import { useStateContext} from '../../context/StateContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="navbar-container">
      <motion.p className="logo">
        <Link href="/">
          <Image src={logo} alt="Home" height={100} width={100}/>
        </Link>
      </motion.p>

      <ul className="app__navbar-links">
        {['prints', 'stickers', 'buttons', 'singletons'].map((item) => (
          <li 
          className="navbar-links-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#df9e5e" fontSize={27} onClick={() => setToggleMenu(true)} />
        <div>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#prints" onClick={() => setToggleMenu(false)}>Prints</a></li>
              <li><a href="#stickers" onClick={() => setToggleMenu(false)}>Stickers</a></li>
              <li><a href="#buttons" onClick={() => setToggleMenu(false)}>Buttons</a></li>
              <li><a href="#singletons" onClick={() => setToggleMenu(false)}>Singletons</a></li>
            </ul>
            </div>
        )}
      </div>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={60} color='#df9e5e'/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar