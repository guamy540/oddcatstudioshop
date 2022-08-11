import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast';
import { favicon } from '../assets'

function MyApp({ Component, pageProps }) {
  return (

    
    
    <StateContext>
      <Layout>        
        <Toaster/>               
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
