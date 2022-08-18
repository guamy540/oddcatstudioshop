import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Head>
        <title>Odd Cat Studio Store</title>
        <meta name='description' content="Odd Cat Studio Shop: Prints, Stickers, Buttons and More"/>
        </Head>
    
        <header>
            <Navbar/>
        </header>
    
        <main className='main-container'>
            {children}
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout

