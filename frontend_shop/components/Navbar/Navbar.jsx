import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Image from 'next/image'
import { logo } from '../../assets';
import  Cart  from '../Cart/Cart';
import { useStateContext} from '../../context/StateContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <motion.p className="logo">
        <Link href="/">
          <Image src={logo} alt="Home" height={100} width={100}/>
        </Link>
      </motion.p>

      <ul className="app__navbar-links">
        {['prints', 'stickers', 'buttons', 'singletons'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>


      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={60}/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar